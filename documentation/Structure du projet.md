# 📂 Structure du Projet et Guide Git

Ce document explique l'organisation des fichiers et la stratégie de gestion des versions pour la plateforme collaborative musicale.

---

## 🛠️ Gestion des Versions (Git)

La règle d'or : On ne suit (commit) que ce qui est nécessaire pour reconstruire le projet.

### ✅ À inclure (Commit)
*   **`src/`** : Tout le code source (pages, composants, logique métier).
*   **`public/`** : Assets statiques (logos, icônes, polices).
*   **`package.json` & `package-lock.json`** : La liste des ingrédients (dépendances) du projet.
*   **`tsconfig.json`** : Configuration du langage TypeScript.
*   **`next.config.ts`** : Paramètres spécifiques à Next.js.
*   **`.env.example`** : Modèle des variables d'environnement (sans les valeurs secrètes).
*   **`.gitignore`** : Le fichier qui définit ce que Git doit ignorer.

### ❌ À exclure (Ignorer)
*   **`node_modules/`** : Très volumineux. Se réinstalle via `npm install`.
*   **`.next/`** : Fichiers temporaires générés lors de la compilation.
*   **`.env.local`** : **DANGER.** Contient vos clés secrètes Supabase. Ne jamais partager.
*   **`*.log`** : Journaux d'erreurs générés par le système.

---

## 🏗️ Organisation des Dossiers

| Emplacement | Rôle |
| :--- | :--- |
| **`src/app/`** | Système de routage (App Router). Chaque dossier ici est une page web. |
| **`src/components/`** | Vos briques d'interface (Boutons, Lecteurs, Cartes). |
| **`src/lib/`** | Configuration des outils tiers (ex: `supabase.ts`). |
| **`public/`** | Fichiers servis directement par le serveur (ex: `/favicon.ico`). |

---

## 🚀 Flux de Travail (Workflow)

1.  **Initialisation** : `npm install` pour installer les dépendances après un clone.
2.  **Développement** : `npm run dev` pour lancer le serveur local sur `http://localhost:3000`.
3.  **Variables d'environnement** : Toujours copier `.env.example` vers `.env.local` pour configurer vos propres clés.
4.  **Build** : `npm run build` avant de déployer en production.

---

> [!IMPORTANT]
> Ne modifiez jamais le dossier `.next/` manuellement. Si vous avez des comportements étranges, vous pouvez le supprimer et relancer le projet ; il se reconstruira proprement.
