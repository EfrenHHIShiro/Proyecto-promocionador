import 'package:appmobile/src/constants.dart';
import 'package:flutter/material.dart';

class SwitchCustom extends StatefulWidget {
  SwitchCustom({Key key}) : super(key: key);

  @override
  _SwitchCustomState createState() => _SwitchCustomState();
}

class _SwitchCustomState extends State<SwitchCustom> {
  bool isSwitched = false;

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return Container(
      width: size.width * 0.8,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.end,
        children: <Widget>[
          Text(
            "Horas Extra?",
            style: TextStyle(color: kTextWhiteColor, fontSize: 18.0),
          ),
          Switch(
              value: isSwitched,
              onChanged: (value) {
                setState(() {
                  isSwitched = value;
                });
              },
              activeTrackColor: kSwitchTrackColor,
              activeColor: kSwitchColor),
        ],
      ),
    );
  }
}
