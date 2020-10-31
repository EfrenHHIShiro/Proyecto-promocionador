import 'package:appmobile/src/constants.dart';
// import 'package:appmobile/src/pages/fragments/DataUser_Fragment.dart';
// import 'package:appmobile/src/pages/fragments/SkillsFragment.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ProfilePage extends StatelessWidget {
  const ProfilePage({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return Scaffold(
      backgroundColor: kPrimaryColor,
      appBar: null,
      body: Center(
        child: Column(
          children: <Widget>[
            // Imagen Usuario
            Container(
                width: 130,
                height: 130,
                margin: EdgeInsets.only(top: 50),
                padding: EdgeInsets.all(30.0),
                decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(100.0),
                    color: Colors.brown),
                child: SvgPicture.asset(
                  'assets/images/usuario.svg',
                  color: kTextWhiteColor,
                )),
            // Name user
            Container(
              margin: EdgeInsets.only(top: 15),
              child: Text(
                "Efren Hazaar Herrera Isaac",
                style: TextStyle(color: kTextWhiteColor, fontSize: 20.0),
              ),
            ),
            // Puesto
            Container(
              margin: EdgeInsets.only(top: 15, bottom: 10),
              child: Text(
                "",
                style: TextStyle(color: kTextWhiteColor, fontSize: 17.0),
              ),
            ),
            // Tabs
            Container(
              height: size.height - 318,
              child: DefaultTabController(
                length: 3,
                child: Column(
                  children: <Widget>[
                    Container(
                      decoration: BoxDecoration(
                          border: Border.all(color: Colors.blueAccent)),
                      child: TabBar(tabs: [
                        Tab(text: "Datos"),
                        Tab(text: "Reservaciones"),
                        Tab(text: "x"),
                      ]),
                    ),
                    Expanded(
                      child: Container(
                        child: TabBarView(children: [
                          Icon(Icons.directions_car),
                          Icon(Icons.directions_transit),
                          Icon(Icons.directions_bike),
                          // DataUserFragment(),
                          // SkillsFragment(),
                          Container(
                            child: Text("User Body"),
                          ),
                        ]),
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
