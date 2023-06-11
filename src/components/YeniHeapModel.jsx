import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useDataContext } from "../context/DataProvider";

const YeniHesapModel = ({ show, handleClose }) => {
  let { data, createData } = useDataContext();

  const [newrow, setNewrow] = useState({
    id: new Date().getTime(), //! uniqe id olması için
    link: "",
    name: "",
    desc: "",
  });

  const handleChange = (e) => {
    setNewrow({ ...newrow, [e.target.id]: e.target.value });
  };

  console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault(); //! Form da inputdan girilen değerler onSubmit olduğunda createData fonksiyonuna gönderilir. Bu işlem RestFull API da unsafe method olan ***POST*** işlemine denk gelir
    createData(newrow);
    setNewrow({ //! Form da ki  input kutular boşaltılır.
      id: "",
      link: "",
      name: "",
      desc: "",
    });
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Sosyal Medya Linki</Form.Label>
            <Form.Control
              type="text"
              autoFocus
              id="link"
              onChange={handleChange}
              value={newrow.link}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Sosyal Medya Adı</Form.Label>
            <Form.Control
              type="text"
              id="name"
              onChange={handleChange}
              value={newrow.name}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Açıklama</Form.Label>
            <Form.Control
              type="text"
              id="desc"
              onChange={handleChange}
              value={newrow.desc}
            />
          </Form.Group>

          <Modal.Footer>
            <Button className="modal_btn1" onClick={handleClose}>
              Vazgeç
            </Button>
            <Button className="modal_btn2" type="submit" onClick={handleClose}>
              Kaydet
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default YeniHesapModel;
