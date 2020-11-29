import 'Categories_Page.dart';
import 'package:appmobile/src/pages/fragments/Home_Fragment.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:flutter/material.dart';
import 'package:appmobile/src/pages/Profile_page.dart';
import 'package:curved_navigation_bar/curved_navigation_bar.dart';
import 'package:appmobile/src/Widgets/ButtonContainer.dart';
import '../constants.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  int _page = 0;
  GlobalKey _bottomNavigationKey = GlobalKey();

  Widget _callPage(int actuallyPage) {
    switch (actuallyPage) {
      case 0:
        return HomeFragment();
      case 1:
        return _homeWidget();
      case 2:
        return Categories();
      case 3:
        return ProfilePage();
      default:
        return _homeWidget();
    }
  }

  Function setStatePage(int index) {
    setState(() {
      _page = index;
    });
  }

  Widget _homeWidget() {
    return Container(
      child: Center(
        child: ListView(
          children: <Widget>[
            Column(
              children: <Widget>[
                // Check in
                ButtonContainer(
                  text: "Check in",
                  onPressed: () {
                    setStatePage(3);
                  },
                ),
                // Meal time
                ButtonContainer(
                  text: "Meal time",
                  onPressed: () {
                    setStatePage(2);
                  },
                ),
                // Check out
                ButtonContainer(
                  text: "Check out",
                  onPressed: () {
                    setStatePage(4);
                  },
                ),
                Container(
                  margin: EdgeInsets.symmetric(vertical: 80),
                  child: SvgPicture.asset(
                    'assets/images/logo_icon_git.svg',
                    height: 160.0,
                    width: 160.0,
                  ),
                ),
              ],
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            ),
          ],
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: kPrimaryColor,
      body: _callPage(_page),
      bottomNavigationBar: CurvedNavigationBar(
        key: _bottomNavigationKey,
        height: 50.0,
        backgroundColor: Colors.white,
        color: kPrimaryColor,
        items: <Widget>[
          Icon(Icons.home),
          Icon(Icons.list),
          Icon(Icons.add),
          CircleAvatar(
            radius: 13,
            backgroundImage: AssetImage('assets/images/avatar.jpg'),
          )
        ],
        onTap: (index) {
          setStatePage(index);
        },
      ),
    );
  }
}
