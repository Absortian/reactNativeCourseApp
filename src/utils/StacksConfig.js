// Restaurants
const restaurantsStack = {
    tab: 'RestaurantsTab',
    title: 'Restaurantes',
    screens: {
        restaurants: {
            tab: 'Restaurants',
            title: 'Restaurantes',
        },
        addRestaurant: {
            tab: 'AddRestaurant',
            title: 'Nuevo Restaurante',
        }
    }
}
// Favorites
const favoritesStack = {
    tab: 'FavoritesTab',
    title: 'Favoritos',
}
// Ranking
const rankingStack = {
    tab: 'RankingTab',
    title: 'Ranking',
}
// Search
const searchStack = {
    tab: 'SearchTab',
    title: 'Buscar',
    screens: {
        search: {
            tab: 'Search',
            title: 'Buscar',
        }
    }
}
// Account
const accountStack = {
    tab: 'AccountTab',
    title: 'Cuenta',
    screens: {
        accountBase: {
            tab: 'AccountBase',
            title: 'Cuenta',
        },
        login: {
            tab: 'LoginScreen',
            title: 'Iniciar Sesión',
        },
        register: {
            tab: 'RegisterScreen',
            title: 'Registrarse',
        },
    }
}
export const StacksConfig = {
    // Restaurants
    restaurant: restaurantsStack,
    // Favorites
    favorites: favoritesStack,
    // Ranking
    ranking: rankingStack,
    // Search
    search: searchStack,
    // Account
    account: accountStack
};