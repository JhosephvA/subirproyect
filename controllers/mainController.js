const path = require("path");

const mainController = {
  home: (req, res) => res.render("home", { title: "Inicio" }),
  about: (req, res) => res.render("about", { title: "Acerca de" }),
  contact: (req, res) => res.render("contact", { title: "Contacto" }),
  services: (req, res) => res.render("services", { title: "Servicios" }),

  // Nuevo: manejar POST del formulario de contacto
  contactPost: (req, res) => {
    const { nombre, email, mensaje } = req.body;
    console.log("📩 Nuevo mensaje de contacto:");
    console.log("Nombre:", nombre);
    console.log("Email:", email);
    console.log("Mensaje:", mensaje);

    // Puedes mandar un mensaje de éxito o redirigir
    res.render("contact", { title: "Contacto", enviado: true });
  }
};

module.exports = mainController;
