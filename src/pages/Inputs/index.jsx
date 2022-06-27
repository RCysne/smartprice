import React from 'react'
import { Button } from "@mui/material";
import Form from 'react-bootstrap/Form';
import './CSS/inputs.css';


export default function Forms() {
  return (


    <div className="body">
      <Form className="container">
        <h1>SmartPrice</h1>
        <Form.Group data-form controlId="formBasicEmail">
          <Form.Label data-label>Marca *</Form.Label>
          <Form.Control data-input type="text" placeholder="Marca" required />

          <Form.Label data-label>Modelo *</Form.Label>
          <Form.Control data-input type="text" placeholder="Modelo" required />

          <Form.Label data-label>Ano *</Form.Label>
          <Form.Control data-input type="text" placeholder="Ano" required />

          <Form.Label data-label>Versão *</Form.Label>
          <Form.Select data-input aria-label="selecione a versão" required>
            <option>Selecione a Versão</option>
            <option value="1">Básico</option>
            <option value="2">Médio</option>
            <option value="3">Top de linha</option>
          </Form.Select>

          <Form.Label data-label>Km</Form.Label>
          <Form.Control data-input type="text" placeholder="Km" />
        </Form.Group>
        <div className="btn">
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </div>

      </Form>
    </div>
  )
}
