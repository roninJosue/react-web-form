import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";
import Button from "@material-ui/core/Button";

const MyDialog = (props) => {
  const {success, handleClose} = props
  return (
    <Dialog
      open={success}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Envío exitoso"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Se ha enviado satisfactoriamente su formulario
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default MyDialog