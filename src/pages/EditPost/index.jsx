

import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocument } from "../../hooks/useFetchDocument";
import { useUpdateDocument } from "../../hooks/useUpdateDocument";
import styled from "styled-components";


const Content = styled.div`


  text-align: center;


 h2 {
  font-size: 2.2em;
 }

 p {
  color: #aaa;
  margin-bottom: 2em;
}

 .preview_title {
  margin-bottom: 0.2em;
  color: #000;
  font-weight: bold;
  font-size: 1.4rem
}

.image_preview {
  max-width: 100%;
  margin-bottom: 1em;
}

`

const EditPost = () => {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState([]);
    const [formError, setFormError] = useState("");

    const { user } = useAuthValue();

    const navigate = useNavigate();

    const { id } = useParams()
    const { document: post } = useFetchDocument("posts", id);

    const { updateDocument, response } = useUpdateDocument("posts");

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormError("");

        // validate image
        try {
            new URL(image);
        } catch (error) {
            setFormError("A imagem precisa ser uma URL.");
        }

        // create tags array
        const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

        // check values
        if (!title || !tags || !body) {
            setFormError("Por favor, preencha todos os campos!");
        }

        console.log(tagsArray);

        console.log({
            title,
            image,
            body,
            tags: tagsArray,
            uid: user.uid,
            createdBy: user.displayName,
        });

        if (formError) return

        const data = {
            title,
            image,
            body,
            tags: tagsArray,
            uid: user.uid,
            createdBy: user.displayName,
        }

        updateDocument(id, data);

        // redirect to home page
        navigate("/dashboard");
    };


    useEffect(() => {

        if (post) {
            setTitle(post.title)
            setBody(post.body)
            setImage(post.image)

            const textTags = post.tags.join(',')
            setTags(textTags)
        }

    }, [post])

    return (
        <div>
            {post ? (
                <Content>
                    <h1>Editar post</h1>
                    <p>Altere os dados do post "{post.title}"</p>
                    <form onSubmit={handleSubmit}>
                        <label>
                            <span>Título:</span>
                            <input
                                type="text"
                                name="text"
                                required
                                placeholder="Pense num bom título..."
                                onChange={(e) => setTitle(e.target.value)}
                                value={title}
                            />
                        </label>
                        <label>
                            <span>URL da imagem:</span>
                            <input
                                type="text"
                                name="image"
                                placeholder="Insira uma imagem que representa seu post"
                                onChange={(e) => setImage(e.target.value)}
                                value={image}
                            />
                        </label>

                        <div >
                            <p className="preview_title">Preview da imagem atual:</p>
                            <img src={image} alt={title} className="image_preview" />
                        </div>

                        <label>
                            <span>Conteúdo:</span>
                            <textarea
                                name="body"
                                required
                                placeholder="Insira o conteúdo do post"
                                onChange={(e) => setBody(e.target.value)}
                                value={body}
                            ></textarea>
                        </label>
                        <label>
                            <span>Tags:</span>
                            <input
                                type="text"
                                name="tags"
                                required
                                placeholder="Insira as tags separadas por vírgula"
                                onChange={(e) => setTags(e.target.value)}
                                value={tags}
                            />
                        </label>
                        {!response.loading && <button className="btn">Editar</button>}
                        {response.loading && (
                            <button className="btn" disabled>
                                Aguarde.. .
                            </button>
                        )}
                        {(response.error || formError) && (
                            <p className="error">{response.error || formError}</p>
                        )}
                    </form>
                </Content>
            )
                : (<p>Carregando...</p>)
            }

        </div>
    );
};

export default EditPost;