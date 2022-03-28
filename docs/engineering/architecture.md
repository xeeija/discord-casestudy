# Engineering

Über Discord werden täglich Millionen von Nachrichten versendet und Millionen Benutzer sind in Sprachkanälen aktiv. Dieses Kapitel beschreibt, wie Discord das umsetzt. 

## Architektur

Um dieses große Ausmaß zu verwalten, verwendet Discord ganz grundsätzlich eine Client/Server-Architektur. Im Backend setzt man auf die Programmiersprachen Elixir und Rust, die für hohe Auslastung und Performance entwickelt sind, und auf eine Adaption von WebRTC für die Audioübertragung in Sprachkanälen.

In Discord passiert das Hauptgeschehen in kleinen bis großen Communities von Mitgliedern, die diverse Text- und Sprachkanäle beeinhalten und als "Discord-Server" bezeichnet werden (nicht zu verwechseln mit den Backend-Servern). Eine weitere Möglichkeit sind private Nachrichten und Anrufe mit einzelen Benutzern oder Freunden.

Um die große Anzahl an Mitgliedern in einem Discord-Server handzuhaben, werden alle Nachrichten sowie Video-/Sprachverbindungen an die Backend-Server von Discord gesendet und dort an andere Benutzer weiterverteilt. Dadurch wird die IP-Adresse eines Benutzers vor anderen geschützt. Video- und Sprachverbindungen werden zusätzlich über Media-Server von Discord geleitet, um u.a. administrative Funktionen zu bieten.

## Backend

Um eine gewisse Ausfallsicherheit zu gewährleisten, ist das Backend von Discord in das "Discord Gateway" und "Voice-Server" eingeteilt. Clients verbinden sich über eine WebSocket-Verbindung mit dem Gateway sobald sie in Discord online sind, um regelmäßig Statusinformationen auszutauschen. 

Beim Betreten eines Sprachkanals wird auch eine Verbindung mit einem Voice-Server hergestellt, der die Sprachübertragung übernimmt. Der gleiche Voice-Server verwaltet alle Kanäle eines Discord-Servers (Community). Sollte ein Voice-Server nicht mehr erreichbar sein, wird das durch regelmäßige Pings automatisch erkannt, und er wird durch einen anderer Voice-Server ersetzt. Das Gateway ist davon nicht betroffen.

![Discord Backend](/img/discord-backend-architecture.gif)

*Quellen:  
How Discord Handles Two and Half Million Concurrent Voice Users using WebRTC, Jozsef Vass: https://discord.com/blog/how-discord-handles-two-and-half-million-concurrent-voice-users-using-webrtc  
Using Rust to Scale Elixir for 11 Million Concurrent Users, Matt Nowack: https://discord.com/blog/using-rust-to-scale-elixir-for-11-million-concurrent-users  
Why Discord is switching from Go to Rust, Jesse Howarth: https://discord.com/blog/why-discord-is-switching-from-go-to-rust*

*Autor: Bastian*
