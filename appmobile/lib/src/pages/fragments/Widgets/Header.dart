import 'package:flutter/material.dart';

import 'UserPhoto.dart';

class Header extends StatelessWidget {
  final double height;
  final String backgroundasset;
  final String userasset;
  final String username;

  const Header({
    Key key,
    this.height = 210,
    @required this.backgroundasset,
    @required this.userasset,
    @required this.username,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      height: this.height,
      padding: EdgeInsets.only(bottom: 10),
      // width: 450,
      decoration: BoxDecoration(
        image: DecorationImage(
          image: AssetImage(this.backgroundasset),
          fit: BoxFit.cover,
        ),
      ),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.end,
        children: <Widget>[
          UserPhoto(
            assetImage: this.userasset,
            size: 100,
          ),
          Text(
            '${this.username}',
            style: TextStyle(
              color: Colors.white,
            ),
          ),
        ],
      ),
    );
  }
}
