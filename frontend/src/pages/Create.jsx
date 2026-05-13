import { useState } from "react";
import { ArrowLeftIcon } from "lucide-react";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";
import axiosInstance from "../lib/axios.js";

const Create = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title.trim() || !description.trim()){
            toast.error("All fields are required");
            return;
        }

        setLoading(true);

        try {
            await axiosInstance.post("/notes", {
                title, description
            })
            toast.success("Note successfully created!");
            navigate("/");
        } catch (e) {
            if (e.response && e.response.status === 429) {
                toast.error("Rate limit exceeded!", {
                    duration: 5000,
                });
            } else {
                toast.error("Failed to create new note.");
            }
        } finally {
            setLoading(false);
        }
    }
    return (
        <div className="min-h-screen bg-base-200">
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-2xl mx-auto">
                    <Link to={"/"} className="btn btn-ghost mb-6">
                        <ArrowLeftIcon className="size-5" />
                        Back to Notes
                    </Link>

                    <div className="card bg-base-100">
                        <div className="card-body">
                            <h2 className="card-title text-2xl mb-4">Create new note</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="form-control mb-4">
                                    <label className="label">
                                        <span className="label-text">Title</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Note tile"
                                        className="input input-bordered"
                                        value={ title }
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </div>
                                <div className="form-control mb-4">
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <input
                                        type="textarea"
                                        placeholder="Note description"
                                        className="textarea textarea-bordered"
                                        value={ description }
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </div>
                                <div className="card-actions justify-end">
                                    <button type="submit" className="btn btn-primary" disabled={loading}>
                                        {loading ? "Creating..." : "Create note"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Create;