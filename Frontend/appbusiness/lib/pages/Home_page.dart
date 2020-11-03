import 'package:appbusiness/widgets/Animated%20BottomBar.dart';
import 'package:flutter/material.dart';

import 'package:appbusiness/constants/color_contstants.dart';

class HomePage extends StatefulWidget {
  const HomePage({Key key}) : super(key: key);

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  List<Widget> _views = [
    new Container(child: Center(child: new Text("MENU SCREEN EXAMPLE", style: TextStyle(color: kTextWhiteColor, fontWeight: FontWeight.bold)))),
    new Container(child: Center(child: new Text("SEARCH SCREEN EXAMPLE", style: TextStyle(color: Colors.redAccent, fontWeight: FontWeight.bold)))),
    new Container(child: Center(child: new Text("FAVORITE SCREEN EXAMPLE", style: TextStyle(color: Colors.redAccent, fontWeight: FontWeight.bold)))),
    new Container(child: Center(child: new Text("PROFILE SCREEN EXAMPLE", style: TextStyle(color: Colors.redAccent, fontWeight: FontWeight.bold))))
  ];

  int index = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: kPrimaryColor,
      appBar: null,
      body: Center(
        child: ListView(
          children: <Widget>[
            Container(
              child: _views[index],
            )
          ]
        )
      ),
      bottomNavigationBar: Builder(builder: (context) =>
        new AnimatedBottomBar(
            defaultIconColor: Colors.black,
            activatedIconColor: Colors.redAccent,
            background: Colors.white,
            buttonsIcons: [Icons.menu, Icons.search, Icons.favorite, Icons.person],
            buttonsHiddenIcons: [Icons.camera_alt, Icons.videocam, Icons.mic, Icons.music_note],
            backgroundColorMiddleIcon: Colors.redAccent,
            onTapButton: (i){
              setState(() {
                index = i;
              });
            },
            onTapButtonHidden: (i){
              _alertExample("You touched at button of index $i");
            },
          )
        ),
    );
  }
  
  Future<void> _alertExample(String message) async {
    return showDialog<void>(
      context: context,
      barrierDismissible: false, // user must tap button!
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text('Alert example'),
          content: new Container(child: new Text(message)),
          actions: <Widget>[
            FlatButton(
              child: Text('OK'),
              onPressed: () {
                Navigator.of(context).pop();
              },
            ),
          ],
        );
      },
    );
  }
}