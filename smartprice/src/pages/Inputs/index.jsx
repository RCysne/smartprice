import React from 'react'
import Button from "@mui/material/Button";
import Form from 'react-bootstrap/Form';
import './CSS/inputs.css';

//temporário, depois isolar em outro lugar
const API_URL = 'http://188.166.29.71/index.php/pricing';

export default function Forms() {
  const [suggestedPrice, setSuggestedPrice] = React.useState(0);
  const [fipe, setFipe] = React.useState(0);
  const [olxOffers, setOlxOffers] = React.useState([]);
  const [icarrosOffers, setIcarrosOffers] = React.useState([]);

  const [make, setMake] = React.useState('');
  const [model, setModel] = React.useState('');
  const [yearModel, setYearModel] = React.useState('');
  const [version, setVersion] = React.useState('');
  const [km, setKm] = React.useState(0);

  const findVehicle = (event) => {
    event.preventDefault();

    fetch(API_URL + `?brand=${make}&model=${model}&yearModel=${yearModel}&version=${version}&km=${km}`)
      .then(response => response.json())
      .then(response => {
        if (!response.fipe) {
          alert('Veiculo nao encontrado');
          return;
        }

        setFipe(response.fipe.price);
        setSuggestedPrice(response.suggestedPrice);
        setOlxOffers(response.olx);
        setIcarrosOffers(response.icarros);
      });
  }


  return (

    <div className="body">
      <Form className="container" onSubmit={findVehicle}>
        <h1>SmartPrice</h1>
        <Form.Group data-form controlId="formBasicEmail">
          <Form.Label data-label>Marca *</Form.Label>
          <Form.Control value={make} onChange={(event) => setMake(event.target.value)} data-input type="text" placeholder="Marca" required />

          <Form.Label data-label>Modelo *</Form.Label>
          <Form.Control value={model} onChange={(event) => setModel(event.target.value)} data-input type="text" placeholder="Modelo" required />

          <Form.Label data-label>Ano *</Form.Label>
          <Form.Control value={yearModel} onChange={(event) => setYearModel(event.target.value)} data-input type="text" placeholder="Ano" required />

          <Form.Label data-label>Versão *</Form.Label>
          <Form.Select onChange={(event) => setVersion(event.target.value)} data-input aria-label="selecione a versão" required>
            <option>Selecione a Versão</option>
            <option value="LS">Básico</option>
            <option value="LT">Médio</option>
            <option value="LTZ">Top de linha</option>
          </Form.Select>

          <Form.Label data-label>Km</Form.Label>
          <Form.Control value={km} onChange={(event) => setKm(event.target.value)} data-input type="text" placeholder="Km" />
        </Form.Group>
        <div className="btn">
          <Button variant="contained" type="submit">
            Enviar
          </Button>
        </div>
      </Form>


      {/* ============================= RESULT ==================================== */}


      <div className="result">
        <h2>Resultado</h2>
        <hr />

        <p>
          <strong>Preço Sugerido:</strong> R$ <span>{suggestedPrice}</span>
        </p>
        <p>
          <strong>Preço FIPE:</strong> R$ <span>{fipe}</span>
        </p>

        <table striped bordered hover style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th colSpan={4}>OLX</th>
            </tr>
            <tr>
              <th>Região</th>
              <th>Média</th>
              <th>Máximo</th>
              <th>Mínimo</th>
            </tr>
          </thead>
          <tbody>
            {olxOffers.map(offer => (
              <tr>
                <td>{offer.city_region}</td>
                <td>R$ {offer.average}</td>
                <td>R$ {offer.min}</td>
                <td>R$ {offer.max}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <table style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th colSpan={4}>iCarros</th>
            </tr>
            <tr>
              <th>Região</th>
              <th>Média</th>
              <th>Máximo</th>
              <th>Mínimo</th>
            </tr>
          </thead>
          <tbody>
            {icarrosOffers.map(offer => (
              <tr>
                <td>{offer.state_region}</td>
                <td>{offer.average}</td>
                <td>{offer.min}</td>
                <td>{offer.max}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
