import 'package:flutter/material.dart';

import 'UserPhoto.dart';

class Header extends StatelessWidget {
  final double height;
  final String backgroundasset;
  final String userasset;

  const Header({
    Key key,
    this.height = 200,
    @required this.backgroundasset,
    @required this.userasset,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      height: this.height,
      padding: EdgeInsets.only(bottom: 10),
      // width: 25,
      decoration: BoxDecoration(
        image: DecorationImage(
          image: AssetImage(this.backgroundasset),
          fit: BoxFit.cover,
        ),
      ),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.end,
        children: <Widget>[
          Center(
            child: UserPhoto(
              assetImage: this.userasset,
              size: 100,
            ),
          ),
        ],
      ),
    );
  }
}
