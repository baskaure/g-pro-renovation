# Analyse SEO, Google Maps (fiche locale) et délais — Pro G Rénovations

Document à part — basé sur l’état du dépôt `g-pro-renovation` tel que publié sur Netlify (`pro-g.netlify.app` au moment de la rédaction).

---

## 1. Ce qu’est le projet (techniquement)

| Élément | Observation |
|--------|---------------|
| **Hébergement** | Netlify, HTTPS forcé (`netlify.toml`), bon signal de base pour la confiance. |
| **Type de site** | Page unique (`index.html`) + application **React chargée dans le navigateur** (`app.jsx` via Babel). Le contenu riche principal est donc rendu côté client pour les utilisateurs ayant JavaScript activé. |
| **Référencement « sans JS »** | Présence d’un **`<noscript>`** volumineux avec titres H2/H3, textes localisés (Nîmes, Gard, métiers, contact) : utile pour une partie des crawlers et la cohérence sémantique. |
| **Balises & meta** | `title`, `description`, `canonical`, `robots`, **Open Graph / Twitter**, **géo** (région, placename, coordonnées). |
| **Données structurées** | JSON-LD (`Organization`, `LocalBusiness` + `Roofer`, `WebSite`, `WebPage`) avec adresse, téléphone, zone, horaires, catalogue d’offres — **très bon socle** pour Google. |
| **Fichiers techniques** | `sitemap.xml` (1 URL), `robots.txt` pointant vers le sitemap, `llms.txt`. |
| **Performance / images** | Préconnexion fonts/unpkg, `preload` sur l’image hero — attention au poids des images dans `input/` sur mobile (à surveiller dans Search Console / PageSpeed). |

**Point d’attention important :** pour Google, ce qui compte le plus est souvent la **fiche Google Business Profile (Google Maps)** + la **cohérence NAP** (nom, adresse, téléphone) entre fiche, site et annuaires — pas seulement le code du site.

---

## 2. Forces du site pour le SEO local

- **Intention locale claire** : Nîmes, Gard, communes, services (toiture, charpente, gouttières, urgences).
- **Schema.org LocalBusiness / Roofer** : aide Google à relier marque, adresse, zone desservie et services.
- **HTTPS, sitemap, canonical** : bonnes pratiques de base.
- **Contenu textuel substantiel** dans le `noscript` + titres de page orientés requêtes type « couvreur Nîmes ».

---

## 3. Limites / risques à connaître

- **Une seule URL indexable** : pour viser beaucoup de requêtes longues (`couvreur marguerittes`, `refaire toiture uzes`, etc.), il faudra souvent **plusieurs pages dédiées** (ou un blog/FAQ) — ce n’est pas encore le cas.
- **Rendu JavaScript** : Google exécute le JS, mais le **premier chargement** et la **stabilité du contenu** restent des sujets de vigilance ; le `noscript` compense partiellement, pas entièrement la richesse de l’app React.
- **Note et avis dans le JSON-LD** : le schéma inclut un `aggregateRating`. Il doit **strictement refléter** la note et le volume d’avis **réels** sur Google (ou la source indiquée), sinon risque d’incohérence perçue par Google.
- **Domaine** : un domaine **personnalisé** (ex. `progrenovations.fr`) relié à la même fiche Google et au même NAP renforce souvent la confiance utilisateur et la mémorisation ; à prévoir à moyen terme.
- **`sameAs` pointant vers une recherche Google Maps** : ce n’est pas l’URL canonique de la fiche ; idéalement, mettre le **lien direct** de la fiche Google Business (celle que vous gérez), une fois identifié.

---

## 4. Google Maps / Google Business Profile — « être dans les premiers »

### Ce que « les premiers » veut dire

- Sur **Google Maps**, l’utilisateur voit surtout la **carte locale** (pack local, 3 résultats sur mobile, etc.). Les places dépendent de la **position de l’utilisateur**, de la **recherche** (« couvreur », « urgence toiture », « charpentier »…), de la **concurrence** à Nîmes / 30, et des **signaux** de la fiche.
- **Personne ne peut garantir** une 1re place permanente : l’algorithme local change, la concurrence est forte sur les métiers du bâtiment.

### Signaux qui comptent le plus (hors site)

1. **Fiche Google Business Profile** complète : catégories exactes, services, photos, horaires, zone, attributs.  
2. **Avis Google** : quantité, récence, note, réponses aux avis.  
3. **Cohérence NAP** : même nom, adresse, téléphone partout (site, fiche, annuaires sérieux).  
4. **Photos et posts** réguliers sur la fiche.  
5. **Comportement utilisateur** : clics, appels, itinéraires (indirectement).

Le **site** joue le rôle de **landing** crédible, **lien** depuis la fiche, et **preuves** (garantie décennale, zone, contact) — il ne « remplace » pas l’optimisation de la fiche.

### Délais réalistes (ordre de grandeur, marché local BTP type Nîmes)

Ces fourchettes sont **indicatives**, pas un engagement de résultat.

| Objectif | Horizon typique (si actions régulières) |
|----------|----------------------------------------|
| Fiche **vérifiée**, complète, site relié, premières **impressions** sur requêtes de marque / proximité | **Quelques semaines** après publication + vérification |
| **Visibilité décente** sur requêtes génériques très concurrentielles (`couvreur nîmes`) dans un rayon utile | Souvent **3 à 9 mois** (parfois plus si concurrence / avis faibles) |
| **Stabilisation** en tête de pack sur plusieurs requêtes clés | Souvent **6 à 18 mois** + maintien (avis, contenu, signaux locaux) |

Si la fiche est neuve, avec peu d’avis face à des acteurs établis, comptez plutôt le **haut de la fourchette**.

---

## 5. SEO « classique » (résultats Google bleu, pas seulement la carte)

- Avec **une seule page** bien optimisée, vous pouvez déjà capter de la visibilité sur **marque** + quelques requêtes **très ciblées**.
- Pour **élargir** sur beaucoup de villes / prestations, il faudra **du contenu unique** par intention (pages locales, guides, FAQ technique, études de cas) et du **temps** d’indexation.

**Délais indicatifs :**

- Indexation de la homepage : **quelques jours à quelques semaines** (soumettre la propriété dans **Google Search Console**, sitemap).  
- Effet mesurable sur requêtes concurrentielles : souvent **plusieurs mois** ; le SEO est **cumulatif** et dépend des liens, du contenu et de la concurrence.

---

## 6. Faut-il acheter des backlinks ?

**Recommandation prudente :**

- **Non** aux achats de packs de liens « SEO » bon marché : risque élevé de **liens toxiques** et de **pénalité** ou simple **ignorance** par Google — surtout pour un site local.
- **Oui** aux **liens naturels ou mérités** : partenaires (fournisseurs, artisans complémentaires), **chambres / fédés** si vous y êtes, articles locaux presse, **sponsors** d’événements avec lien, **annuaires de qualité** (très sélectifs).

Pour un **couvreur local**, la priorité est en général : **fiche Google + avis + site propre + cohérence NAP** plutôt qu’une campagne agressive de backlinks.

Si un prestataire propose « 100 backlinks pour 50 € », **fuyez**.

---

## 7. Check-list actionnable après publication

1. **Google Search Console** : ajouter `https://pro-g.netlify.app` (ou le domaine final), envoyer le sitemap.  
2. **Google Business Profile** : vérifier, compléter, lier le **bon** site, harmoniser téléphone / adresse avec le site.  
3. **NAP** : même bloc contact partout (site, fiche, email signature, devis).  
4. **Stratégie d’avis** : demande systématique aux clients satisfaits (sans incitation monétaire contraire aux règles Google).  
5. **Nom de domaine** : passer sur un `.fr` ou brand quand vous êtes prêts ; mettre à jour canonical, OG, schema, sitemap.  
6. **Suivi** : Search Console + statistiques fiche Google (recherches, appels).  
7. **Contenu futur** : envisager des pages **`/couvreur-nimes`**, **`/couvreur-[ville]`** ou `/urgence-toiture` avec textes uniques si vous visez plusieurs villes hors Nîmes.

---

## 8. Synthèse pour la question « dans combien de temps on sera dans les premiers ? »

- **Réponse honnète** : le **rang exact** dépend de Google, de la position géographique de l’utilisateur et des concurrents ; **aucun délai fixe** n’est garantissable pour « être premier » sur Maps ou sur le SEO.  
- **Ordre de grandeur raisonnable** : premiers effets souvent sous **1 à 3 mois** avec fiche bien remplie + avis qui arrivent ; **position forte** sur requêtes difficiles plutôt **6 à 18 mois** de travail continu.  
- **Backlinks** : utiles une fois les bases locales solides ; **privilégier la qualité** et éviter les achats massifs low-cost.

---

*Document préparé à partir du code du site (meta, schema, sitemap, structure). À mettre à jour si vous changez d’URL, de domaine ou de contenu.*
