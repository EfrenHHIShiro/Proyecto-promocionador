// import 'package:appmobile/src/pages/fragments/Widgets/ListaEducion.dart';
// import 'package:appmobile/src/pages/fragments/Widgets/ListaExperiencia.dart';
import 'package:appmobile/src/pages/fragments/Widgets/TitlesTextContainer.dart';
import 'package:flutter/material.dart';

import 'package:appmobile/src/pages/fragments/Widgets/TextContainer.dart';

class DataUserFragment extends StatelessWidget {
  const DataUserFragment({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return Container(
      child: ListView(
        children: <Widget>[
          Container(
            padding: EdgeInsets.only(
                left: size.width * 0.09,
                right: size.width * 0.09,
                bottom: size.width * 0.09),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                TitlesTextContainer(
                  title: "Datos",
                ),
                TextContainer(
                  title: "About",
                  info:
                      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
                ),
                TextContainer(
                  title: "Email",
                  info: "efrenherrera@grupogit.com",
                ),
                TextContainer(
                  title: "Celular",
                  info: "9999955764",
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: <Widget>[
                    TextContainer(
                      title: "Fecha de nacimiento",
                      info: "22/01/2000",
                    ),
                    TextContainer(
                      title: "Sexo",
                      info: "Hombre",
                    ),
                  ],
                ),
                TextContainer(
                  title: "Direccion",
                  info: "Calle 21 x 36j Col.Miguel Hidalgo",
                ),
                TitlesTextContainer(
                  title: "Educacion",
                ),
                // ListaEducacion(),
                TitlesTextContainer(
                  title: "Experiencia",
                ),
                // ListaExperiencia(),
                // ListaExperiencia(),
              ],
            ),
          )
        ],
      ),
    );
  }
}
