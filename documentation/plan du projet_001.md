# Projet : plateforme collaborative musicale

# 1. Vision générale du projet

Le projet consiste à créer une plateforme web collaborative dédiée à la musique.

L’objectif n’est pas de créer un réseau social classique comme Facebook, basé sur les amis, les groupes privés ou les fils d’actualité personnels.

L’idée est plutôt de créer une plateforme publique où les utilisateurs peuvent :

- partager des projets musicaux
- collaborer
- proposer des remix
- téléverser des fichiers
- faire évoluer les créations des autres

La plateforme fonctionnerait un peu comme un mélange entre :

- GitHub, pour l’idée de branches et de versions
- SoundCloud, pour le côté musical
- Gumroad ou Patreon, éventuellement, pour le côté distribution ou monétisation
- un réseau collaboratif ouvert, mais sans système d’amitié complexe au départ

## Idée centrale

Un utilisateur crée un projet musical.

D’autres utilisateurs peuvent :

- voir le projet
- aimer le projet
- demander à collaborer
- télécharger certains fichiers
- créer une nouvelle version ou un remix

Cette version devient une branche du projet original.

La plateforme permet donc à une chanson ou à une idée musicale de devenir un arbre créatif vivant.

---

# 2. Fonctionnalités principales du projet

# 2.1 Gestion des utilisateurs

La plateforme doit permettre aux gens de créer un compte.

## Fonctionnalités prévues

- inscription
- connexion
- déconnexion
- profil public
- nom d’artiste ou pseudonyme
- courte biographie
- photo ou avatar
- liste des projets créés
- liste des remix créés
- liste des collaborations

Le profil sert à identifier les créateurs, mais il ne doit pas nécessairement fonctionner comme un profil Facebook.

Le but n’est pas de bâtir une plateforme d’amis, mais une plateforme de création.

---

# 2.2 Création de projets musicaux

Un utilisateur connecté peut créer un projet.

## Un projet pourrait contenir

- titre
- description
- style musical
- tempo
- tonalité
- image de couverture
- fichiers audio
- fichiers MIDI
- stems
- paroles
- notes de production
- licence ou conditions de réutilisation
- date de création
- créateur original

## Exemples de projets

- une chanson complète
- une boucle musicale
- un beat
- une ligne de basse
- un riff de guitare
- un projet Cubase exporté en stems
- une piste vocale à remixer
- une idée musicale incomplète

Le projet n’a pas besoin d’être terminé.

Il peut être volontairement ouvert à la collaboration.

---

# 2.3 Téléversement de fichiers

Chaque projet peut contenir plusieurs fichiers.

## Types possibles

- MP3
- WAV
- FLAC
- MIDI
- ZIP
- images
- documents texte
- PDF
- fichiers de projet selon les limites décidées plus tard

## Version simplifiée recommandée pour commencer

- MP3
- WAV
- MIDI
- ZIP
- PNG ou JPG pour les pochettes

Les fichiers pourraient être publics ou réservés aux collaborateurs.

Pour une première version, il serait plus simple de tout garder public ou semi-public.

---

# 2.4 Système de likes

Les utilisateurs peuvent aimer un projet.

## Le like sert à

- montrer l’intérêt
- mettre en valeur les projets populaires
- encourager les créateurs
- créer un premier niveau d’interaction simple

C’est une fonctionnalité simple, mais très utile pour donner de la vie à la plateforme.

---

# 2.5 Système de remix ou branches

C’est probablement la fonctionnalité la plus importante du projet.

Un utilisateur peut créer un remix à partir d’un projet existant.

Dans la base de données, ce remix reste un projet normal, mais il contient une référence vers le projet original.

## Exemple

- Projet A : chanson originale
- Projet B : remix de Projet A
- Projet C : version acoustique de Projet A
- Projet D : remix du Projet B

On obtient alors une structure en arbre.

## Cela permet de montrer

- l’origine d’une idée
- les versions dérivées
- les collaborations
- l’évolution d’un morceau

C’est ce qui différencie la plateforme d’un simple site de publication musicale.

---

# 2.6 Collaboration

La collaboration peut être introduite progressivement.

## Première version simple

- un bouton Je veux collaborer
- une demande envoyée au créateur du projet
- le créateur peut accepter ou refuser
- les collaborateurs acceptés apparaissent sur le projet

## Version plus avancée plus tard

- messagerie interne
- permissions par fichier
- accès privé à certains stems
- commentaires privés entre collaborateurs
- gestion de rôles
- historique des contributions

Pour le MVP, il vaut mieux garder ça simple.

---

# 2.7 Commentaires

Les utilisateurs pourraient commenter un projet.

## Utilité

- donner du feedback
- proposer des idées
- demander des précisions
- encourager le créateur
- discuter d’un remix

Les commentaires peuvent venir après les fonctionnalités principales, car ils ajoutent aussi des besoins de modération.

---

# 2.8 Exploration des projets

La plateforme devrait permettre de parcourir les projets publiés.

## Fonctionnalités possibles

- page d’accueil avec projets récents
- projets populaires
- recherche par mot-clé
- filtre par style musical
- filtre par tempo
- filtre par type de projet
- liste des projets ouverts à la collaboration

## Version simple recommandée

- page d’accueil
- liste des projets récents
- page détail d’un projet

C’est suffisant pour commencer.

---

# 3. Plan d’implémentation recommandé

# Phase 1 : base du projet

## Objectif

Créer la structure technique.

## Outils

- Next.js
- TypeScript
- Tailwind CSS
- Supabase

## Fonctionnalités

- création du projet web
- page d’accueil simple
- structure des dossiers
- connexion à Supabase
- design de base

---

# Phase 2 : authentification

## Objectif

Permettre aux utilisateurs de créer un compte.

## Fonctionnalités

- inscription
- connexion
- déconnexion
- protection des pages privées
- création automatique d’un profil utilisateur

---

# Phase 3 : profils utilisateurs

## Objectif

Chaque utilisateur possède une page publique.

## Fonctionnalités

- afficher un profil
- modifier son profil
- voir les projets créés par un utilisateur

---

# Phase 4 : projets musicaux

## Objectif

Permettre la création et l’affichage de projets.

## Fonctionnalités

- créer un projet
- modifier son projet
- supprimer son projet
- afficher tous les projets
- afficher un projet individuel

---

# Phase 5 : fichiers

## Objectif

Permettre le téléversement de fichiers.

## Fonctionnalités

- upload de fichiers
- liste des fichiers d’un projet
- téléchargement des fichiers
- suppression d’un fichier par le propriétaire

---

# Phase 6 : likes

## Objectif

Ajouter une interaction simple.

## Fonctionnalités

- aimer un projet
- retirer son like
- afficher le nombre de likes
- empêcher un utilisateur de liker deux fois le même projet

---

# Phase 7 : remix et branches

## Objectif

Créer la logique principale du projet.

## Fonctionnalités

- créer un remix à partir d’un projet existant
- lier un remix au projet original
- afficher les remix associés à un projet
- afficher l’arbre des versions plus tard

---

# Phase 8 : collaboration

## Objectif

Permettre aux utilisateurs de signaler leur intérêt à collaborer.

## Fonctionnalités

- bouton demander à collaborer
- liste des demandes reçues
- accepter ou refuser une demande
- afficher les collaborateurs sur un projet