import { useState, type ChangeEvent, type FormEvent } from "react"
import { Button } from "react-bootstrap"
import Form from "react-bootstrap/esm/Form"
import { NavLink } from "react-router"
import ApiClient from "../../utils/ApiClient"

interface FormMovie {
    judul : string,
    tahunRilis : string,
    sutradara : string
}

function AddMovies() {
    const [form, setForm] = useState<FormMovie>({
        judul : "",
        tahunRilis : "",
        sutradara : ""
    })

    const handleInputChange = (event : ChangeEvent<HTMLInputElement>) => {
        const{name, value} = event.target

        setForm({
            ...form,
            [name] : value
        })
    }
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await ApiClient.post('/movie', form)
            console.log(response)
        } catch (error) {
            console.log(error);
        }
    }

    return <div className="container mx-auto">
        <h2>Add Movie Page</h2>
        <NavLink to="/" className ="btn btn-primary">List Movie</NavLink>
    <div>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formJudul">
                <Form.Label>Judul</Form.Label>
                <Form.Control
                value={form.judul}
                onChange={handleInputChange}
                name="judul"
                type="text" 
                placeholder="Masukkan Judul" />
            </Form.Group>
           <Form.Group className="mb-3" controlId="formSutradara">
                <Form.Label>Sutradara</Form.Label>
                <Form.Control
                value={form.sutradara}
                onChange={handleInputChange}
                name="sutradara"
                type="text" 
                placeholder="Masukkan Nama Sutradara" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formTahunRilis">
                <Form.Label>Tahun Rilis</Form.Label>
                <Form.Control
                value={form.tahunRilis}
                onChange={handleInputChange}
                name="tahunRilis"
                type="text" 
                placeholder="Masukkan Tahun Rilis" />
            </Form.Group>
            <Button type = "submit" variant = "primary">
                Simpan
            </Button>
    </Form>
    </div>
    </div>
}

export default AddMovies