## install
```
npm install
```

## development
```
npm start
```

## production
```
npm run build
```

***

# frontend-rekrutacja

## Zadanie 1 - converter
Userstory 1: Jako użytkownik chcę konwertować kwoty w EUR na kwoty w PLN.
Userstory 2: Jako użytkownik chcę, aby kolejne konwersje EUR/PLN wyświetlały się w formie kolejnych kafli.
Mockup: do pobrania pod tym adresem - http://bidev.pl/rekrutacja/zadanie-js-mockup.png

### Proces:
Użytkownik wpisuje ilość EUR do inputa.
Po kliknięciu w button "CONVERT TO PLN" na widoku dodaje się nowy "kafel" zawierający wartosść PLN (czyli EUR przeliczone za pomocą kursu walutowego na PLN) oraz datę i godzinę konwersji (datę, w której został kliknięty button "CONVERT TO PLN")
Kurs walutowy generuje się losowo wg reguły: 4,2 * (1+(random ­ 50)/1000),​ gdzie random - losowa liczba całkowita z przedziału <0; 100>
Przykład: Użytkownik wpisał 4 EUR i kliknął "CONVERT TO PLN". Wygenerowany losowo kurs walutowy wyniósł 4. W interfejsie pojawił się nowy kafel z wartością PLN 16.

### Założenia:
Nie musimy walidować poprawności liczby wpisywanej przez użytkownika (zakładamy, że zrobimy to w przyszłości)
Konwersje nie zapisują się. Po odświeżeniu strony widzimy ponownie pustą listę.
Użytkownik może wykonać nieskończoną liczbę konwersji. Każda kolejna konwersja dodaje kolejny kafel.
Gotową aplikację wypchnijmy do tego repozytorium git

### Dodatkowe punkty za:
składnie ES6
zadbanie o integralność z różnymi przeglądarkami
prosty server w node.js lub użycie webpacka

### Dodatkowe informacje oczekiwane po wykonaniu zadania:
ile czasu było potrzebne łącznie na wykonanie zadania
co sprawiło Ci największą trudność
