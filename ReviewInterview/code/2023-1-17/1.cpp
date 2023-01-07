#include <iostream>
#include <cstdio>
#include <string>
#include <algorithm>
using namespace std;
string str;
char change(char ch) {
	if ((ch >= '0' && ch <= '9') || (ch >= 'a' && ch <= 'z')) return ch;
	if (ch >= 'A' && ch <= 'Z') return ch + 32;
	return '*';
}
string parse(string s) {
	int len = s.length();
	string t = "";
	for (int i = 0; i < len;++i) {
		char ch = change(s[i]);
		if (ch == '*') continue;
		else t += ch;
	}
	return t;
}
bool isParal(string s) {
	string t = parse(s);
	string s2(t);
	reverse(s2.begin(), s2.end());
	return t == s2;
}
int main() {
	ios::sync_with_stdio(false);cin.tie(0);cout.tie(0);
	getline(cin, str);
	cout << (isParal(str) ? "TRUE" : "FALSE");
	return 0;
}
/**
 * 青训营笔试题
 * 经典判断回文串+简单过滤 过滤一下只看字母和数字，并且字母全变小写，这题其实js写更快...
*/