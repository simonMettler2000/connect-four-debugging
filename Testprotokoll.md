Programmabsturz:
Durch invalide Züge kann das Spiel zum Absturz gebracht werden. Beispiel, 
- [Zustand leeres Brett] wenn der Spieler in Spalte 9 einen "Stein" einfügen möchte (es gibt nur bis zu 7 Spalten) 
- [Zustand leeres Brett] wenn die Spieler weiterhin "Steine" in die gleiche Spalte werfen, obwohl diese schon das Maximum erreicht haben (eigentlich valide weil die Spalte existiert, jedoch invalide, weil die Spalte schon voll ist)
- Fragile Gewinn Logik mit folgendem Brettzustand:
Player o: 3
0 1 2 3 4 5 6
o x x o _ _ _
x x o x _ _ _
o o x o _ _ _
x x o x _ _ _
o o x o _ _ _
x x o o _ _ _

Player o: A winner is you!
PS C:\Users\Simon Mettler\Documents\1. Schule\connect-four-debugging> 

