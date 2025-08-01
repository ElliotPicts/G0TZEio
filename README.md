# G0TZE AFFILIATES

Site Web3 complet pour récompenser les joueurs les plus actifs de la communauté G0TZE qui utilisent les liens d'affiliation.

## 🎯 Fonctionnalités

- **Leaderboard en temps réel** avec reset automatique mensuel
- **Tracking des volumes** sur 4 plateformes principales
- **Distribution automatique** de $3,000 USD par mois
- **Interface moderne** avec design dark et animations
- **API intégration** prête pour les vraies données

## 🔗 Plateformes Trackées

1. **Rugs.fun** → https://rugs.fun/?start=REF_Q51LEOWNE0RI
2. **Solpump** → https://solpump.com/a/G0TZE  
3. **BCGame** → Code RAWLOOT
4. **Rain.gg** → Code RAWLOOT

## 🏗️ Architecture

```
src/
├── components/          # Composants React
├── services/           # Services API
├── utils/              # Utilitaires
├── types/              # Types TypeScript
└── App.tsx            # Composant principal
```

## 🚀 Intégration API

Le projet est conçu pour intégrer facilement les APIs officielles des plateformes :

### Backend Requirements
- Node.js + Express ou Next.js API routes
- Base de données (SQLite/MongoDB) pour stocker les volumes
- Cron jobs pour les mises à jour automatiques
- Cache système pour optimiser les performances

### API Endpoints à implémenter
```
GET /api/leaderboard           # Classement actuel
GET /api/rugs-fun/affiliates   # Données Rugs.fun
GET /api/solpump/affiliates    # Données Solpump  
GET /api/bcgame/affiliates     # Données BCGame
GET /api/rain-gg/affiliates    # Données Rain.gg
PUT /api/users/:id             # Mise à jour utilisateur
```

## 🔒 Sécurité

- Validation des données API
- Sanitisation des entrées utilisateur
- Rate limiting sur les endpoints
- Authentification admin pour la gestion

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints optimisés
- Interface adaptée aux différents écrans
- Performance optimisée

## 🎨 Design System

- **Couleurs** : Purple/Pink/Blue gradients sur fond sombre
- **Animations** : Smooth transitions et micro-interactions
- **Typography** : System fonts avec variations de poids
- **Spacing** : Système basé sur Tailwind (4px increments)

## 🔧 Variables d'environnement

```env
REACT_APP_API_BASE_URL=your_api_url
REACT_APP_RUGS_FUN_API=rugs_fun_api_key
REACT_APP_SOLPUMP_API=solpump_api_key
REACT_APP_BCGAME_API=bcgame_api_key
REACT_APP_RAIN_GG_API=rain_gg_api_key
```

## 📈 Métriques

- Volume total trackés
- Nombre d'affiliés actifs  
- Récompenses distribuées
- Performance par plateforme

## 🚀 Déploiement

Optimisé pour :
- Vercel (recommandé)
- Netlify  
- AWS Amplify
- Tout autre hosting moderne

---

**Projet G0TZE AFFILIATES** - Communauté @G0TZEWEB3