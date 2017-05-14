# frontend rekrutacja

* zadanie zrobione na moim środowisku (info na dole)
* ~4h
* grafiki brandowe zajęły czas -> pociąć, minifikacja i base64, tak wg mnie najrozsądniej, najmniej requestów i wielkość przyzwoita, opocjonalnie brałem pod uwagę css-sprites

## live:

http://lysikowski.net/portfolio/demo-formularz-rejestracji/

***

## Zadanie 2 - HTML/CSS
Zadanie polega na przygotowaniu htmla i cssa, które będą odzwierciedlały zaprojektowaną grafikę. Ma na celu ogólne sprawdzenie umiejętności pisania semantycznego HTMLa i CSSa. Dobrze by było, żeby efekt był blisko projektu, ale nie jest wymagana dokładność co do piksela.
Dozwolone jest użycie preprocesorów, autoprefixera czy narzędzi automatyzujących workflow.

### Materiały do pobrania:
mockup JPG: http://bidev.pl/rekrutacja/zadanie-templating-mockup.jpg
plik PSD: http://bidev.pl/rekrutacja/zadanie-templating-psd.zip
wyciągnięte z PSD assety: http://bidev.pl/rekrutacja/zadanie-templating-materialy.zip

### Jeśli nie masz Photoshopa, tutaj są pomocne informacje:
font: Lato, rozmiary 14px i 16px, wagi Light i Bold
Bazowy kolor tekstu: #323232
Kolor akcentu: #30306d
Kolor tła: #e5ceae
Kolor labeli grafik: #929292
Kolor 3 z 4 borderów inputa: #b9b9b9
Przezroczystość tła: #000, alpha 0.5
Box shadow: #000, alpha 0.35, 20px


Chciałbym zobaczyć jak najlepsze jakościowo wykonania przy założeniu, że kod miałby trafić na produkcję - z uwzględnieniem wszystkich funkcjonalnych i niefunkcjonalnych aspektów.
Gotową aplikację wypychamy do tego repozytorium git.

### Dodatkowe punkty za:
Wsparcie innych przeglądarkach

### Dodatkowe informacje oczekiwane po wykonaniu zadania:
ile czasu było potrzebne łącznie na wykonanie zadania
co sprawiło Ci największą trudność



# Frontend-Simple-Boilerplate

***

### Includes:

- gulp
- browsersync
- scss
- html partials
- autoprefixer
- cssnano
- uglify
- reset CSS

***
### Directory structure:

```
./
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── _home.html
│   │   │   ├── _header.html
│   │   │   └── _footer.html
│   │   └── stylesheet/
│   │       ├── base/
│   │       │   ├── _base.scss
│   │       │   └── _typography.scss
│   │       ├── layout/
│   │       │   ├── _home.scss
│   │       │   ├── _header.scss
│   │       │   └── _footer.scss
│   │       ├── modules/
│   │       │   ├── _button.scss
│   │       │   └── _form.scss
│   │       ├── tools/
│   │       │   ├── _helpers.scss
│   │       │   ├── _media-queries.scss
│   │       │   ├── _mixins.scss
│   │       │   └── _reset.scss
│   │       │   └── _variables.scss
│   │       └── main.scss
│   ├── css/
│   ├── fonts/
│   ├── images/
│   ├── js/
│   └── index.html
│
├── dev/
└── prod/
```

***
### Require:

- NodeJS

- gulp
```
npm install -g gulp
```
or
```
sudo npm install -g gulp
```

***
### Install:

```
npm install
```

***
## Use:

### development:

```
gulp serve
```

open browser on ```localhost:3000```

files goes to ```dev``` directiory

### production:

```
gulp
```

files in ```prod``` directory
