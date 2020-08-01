import M from "materialize-css";

const PopUp = {
  exibeMensagem: (status, msg) => {
    if (!msg) {
      return M.toast({
        html: "Algum erro aconteceu",
        classes: "yellow",
        displayLength: 2000,
      });
    }

    if (status === "success") {
      return M.toast({ html: msg, classes: "green", displayLength: 2000 });
    }

    if (status === "error") {
      return M.toast({ html: msg, classes: "red", displayLength: 2000 });
    }
  },
};

export default PopUp;
