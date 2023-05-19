import { useState } from "react";
import imageAvion from "../../assets/avion.webp";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
  // Modal
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const HomeForm = () => {
  const [value, setValue] = useState(null);
  const [dataPiker, setDataPiker] = useState(null);
  // const [pasajeros, setPasajeros] = useState(false);
  return (
    <section>
      <figure>
        <img src={imageAvion} alt="Avion" />
      </figure>
      <Container maxWidth="sm">
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
          sx={{ minHeigtht: "100vh" }}
        ></Grid>
        <Grid item>
          <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
            <Typography variant="h4">
              Busca un nuevo destino y comienza la aventura
            </Typography>
            <Typography variant="h6">
              Descubre vuelos al mejor precio y perfectos para cualquier lugar
            </Typography>
            <Box component="form">
              <TextField label="Origen" sx={{ m: 1, width: "25ch" }} />
              <TextField
                label="Seleccione un destino"
                sx={{ m: 1, width: "30ch" }}
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Salida"
                  value={value}
                  onChange={(newValue) => setValue(newValue)}
                  renderInput={(props) => <TextField {...props} />}
                />
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Regreso"
                  value={dataPiker}
                  onChange={(newValue) => setDataPiker(newValue)}
                  renderInput={(props) => <TextField {...props} />}
                />
              </LocalizationProvider>
              {/* <TextField variant="contained" onClick={() => setPasajeros(true)}>
                Pasajeros
              </TextField>
              <Modal pasajeros={pasajeros} onClose={()=> setPasajeros(false)}>
                <Box>
                  <Typography variant="h5">Adultos</Typography>
                  <Typography variant="body2">13 + años</Typography>
                </Box>
              </Modal> */}
              <Button fullWidth type="submit" >
                Buscar vuelos
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Container>
    </section>
  );
};

export default HomeForm;
