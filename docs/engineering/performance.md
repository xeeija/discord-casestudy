# Performance

Discord legt sehr großen Wert auf Permormance.
Die Philosophie priorisiert eher eine gute und stabile Performance über neuen oder experimentellen Features.

## Allgemein

Gute Performance und Responsiveness erreicht Discord in der Desktop Anwendung und der Webanwendung unter anderem durch **Code Splitting**.
Code splitting wird realisiert durch Webpack, ein Tool das Programmcode in einzelne Dateien bündelt, indem unterschiedliche Inhalte in verschiedenen Chunks gespeichert sind, die bei nur bei Bedarf geladen werden.

Das hat einige Vorteile:

- schnellere Startzeit und Ladezeiten 
- Möglichkeit für neue Features, ohne Einfluss auf die Performace
- verschiedene Sprachen (I18n)

Die Möglichkeit, beliebig viele Sprachen hinzuzufügen und Features nur bei Bedarf zu laden trägt damit zu Usability bei.
Außerdem wird die Änderung/Verbesserung von individuellen Features vereinfacht, da im besten Fall nur nur einzelne oder einige wenige betroffene Chunks geändert werden.

## Mobile

Da Discord große Teile ihrer Codebasis für alle Platformen verwendet, sind einige Optimierungen wie Code Splitting auch für mobile Platformen anwendbar.
Zusätzlich zur Web- bzw. Desktopanwendung gibt es für die mobile Anwendung noch ein paar weitere Faktoren, die berücksichtig werden müssen:

- schwächere/begrenzte Leistung
- Batterieverbrauch
- größere Vielfalt an Geräten

Aufgrund der größeren Vielfalt an Geräten, wird die Anwendung für ältere Geräte entwickelt und optimiert, dass es bei einem Großteil der Benutzer keine Performanceeinbußen gibt.

Da die mobile Anwendung auf React Native als Framework basiert, sind auch viele der Optimierungen spezifisch für React Native. Dazu gehören  in der Handhabung der Daten, z.B. 
- rechenintensive Aufgaben möglichst zu vermeiden bzw. zu cachen, wie die Optimierung und Erstellung von regulären Ausdrücken (Regex)
- Benutzerdaten nur dort zu laden, wo sie benötigt werden, um nicht unnötig viele Teile des User Interface neuzuladen

oder die Optimierung der React-Native Komponenten, aus denen das User Interface besteht. Einige Optimierungen dieser Komponenten sind:
- Updates und Rendern als Batch, in sog. "Commit Passes"
- Komponenten die sich nicht ändern nicht neuzuladen
- lange Listen nicht unnötig oft zu sortieren
- eine spezielle Listen-Implementation, die nur soviele Resourcen benötigt, wie Einträge auf dem Bildschirm Platz haben, und nicht Resourcen für alle Einträge der Liste reserviert

*Quellen:*  
*https://discord.com/blog/how-discord-maintains-performance-while-adding-features*  
*https://discord.com/blog/how-discord-achieves-native-ios-performance-with-react-native*

*Autor: Bastian*
