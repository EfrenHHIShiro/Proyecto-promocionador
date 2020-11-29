import 'package:appmobile/src/constants.dart';
import 'package:appmobile/src/pages/fragments/DataUser_Fragment.dart';
import 'package:flutter/material.dart';
import 'fragments/Widgets/Header.dart';

class ProfilePage extends StatelessWidget {
  const ProfilePage({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: null,
      body: Center(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: <Widget>[
            // Imagen Usuario
            Header(
              backgroundasset: 'assets/images/the-legend-of-zelda.jpg',
              userasset: 'assets/images/avatar.jpg',
            ),
            // Tabs
            Container(
              height: size.height - 270,
              child: DefaultTabController(
                length: 2,
                child: Column(
                  children: <Widget>[
                    Container(
                      decoration: BoxDecoration(
                          color: kPrimaryColor,
                          border: Border.all(color: Colors.blueAccent)),
                      child: TabBar(tabs: [
                        Tab(text: "Datos"),
                        Tab(text: "Favoritos"),
                        // Tab(text: ""),
                      ]),
                    ),
                    Expanded(
                      child: Container(
                        child: TabBarView(children: [
                          DataUserFragment(),
                          Icon(Icons.directions_transit),
                          // Icon(Icons.directions_bike),

                          // SkillsFragment(),
                          // Container(
                          //   child: Text("User Body"),
                          // ),
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
