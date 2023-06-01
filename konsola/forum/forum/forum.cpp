

#include <iostream>
using namespace std;

class Osoba {
private:
	int id;
	string imie_osoby;

public:
	static int liczba_instancji;

	Osoba(){
		id = 0;
		imie_osoby = "";
		liczba_instancji = 0;
		liczba_instancji++;
	}
	Osoba(int id,string imie) {
		this->id = id;
		this->imie_osoby = imie;
		liczba_instancji++;
	}
	Osoba(Osoba&){
		liczba_instancji++;
	}

	void wypiszObiekt(string imie_uzytkownika) {
		if (imie_osoby != "") {
			cout << "Czesc " << imie_uzytkownika << ", mam na imie " << imie_osoby << endl;
		}
		else {
			cout << "Brak danych" << endl;
		}
	}
};


int Osoba::liczba_instancji=0;


int main()
{
	Osoba osoba;
	osoba.wypiszObiekt("Natan");
	Osoba osoba2(1,"Euzeby");
	osoba2.wypiszObiekt("Natan");

}