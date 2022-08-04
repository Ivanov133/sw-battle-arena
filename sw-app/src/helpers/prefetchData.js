//This is only used to populate some data in the server
//Log user to make authorized requests
//Make requests about characters, comments and battles

import { createCharacter } from "../services/characterService"
import { login } from "../services/userService"

const userData = {
    'email': 'peter@abv.bg',
    'password': 123456
}

export const charactersData = [
    {
        "name": "Darth Nihilus",
        "dueling": "73",
        "force": "82",
        "allegiance": "Dark Side",
        "fullPower": "92",
        "shortImg": "https://i.ibb.co/wCqNGRk/short-nihilus.jpg",
        "fullImg": "https://i.ibb.co/WxH8x1t/main-qimg-4b62c2c5ce95673bb1a7ca3143987c83-c.jpg",
        "quote": "”He cares nothing for the Sith or its teachings… or the Jedi. And when the Jedi are dead, he will feed on the galaxy, the Republic, and eventually, consume the Sith as well.“",
        "author": "Kreia",
        "description": "Darth Nihilus was a Human male who reigned as a Dark Lord of the Sith during the era of strife following the Jedi Civil War. Before becoming a Sith Lord, he lost everything during the Galactic Republic's war against the Mandalorian Neo-Crusaders. He survived the activation of the Mass Shadow Generator superweapon during the war's final battle at the planet of Malachor V, which surrounded the planet with a destructive spatial phenomenon known as a mass shadow. Experiencing the shadow that obliterated almost everything on and around the planet made Nihilus crave Force energy. The affliction painfully ravaged his body while rendering him a wound in the Force. He was found by a seeker of these, the former Jedi Kreia, who became the Sith Lord Darth Traya and told him that she could teach him to feed his endless hunger. He accepted her offer of apprenticeship at the Trayus Academy on Malachor V, where he, over time, became one of three concurrent Dark Lords of the Sith.",
        "feats": [
            "Devours planets",
            "immortal"
        ]
    },
    {
        "name": "Darth Maul",
        "dueling": "69",
        "force": "45",
        "allegiance": "Dark Side",
        "fullPower": "69",
        "shortImg": "https://i.ibb.co/vvQbXgq/short-maul.jpg",
        "fullImg": "https://i.ibb.co/5WySGgJ/8835584610c86b2aa3d7a0b1821aedc7.jpg",
        "quote": "”He cares nothing for the Sith or its teachings… or the Jedi. And when the Jedi are dead, he will feed on the galaxy, the Republic, and eventually, consume the Sith as well.“",
        "author": "Kreia",
        "description": "Darth Nihilus was a Human male who reigned as a Dark Lord of the Sith during the era of strife following the Jedi Civil War. Before becoming a Sith Lord, he lost everything during the Galactic Republic's war against the Mandalorian Neo-Crusaders. He survived the activation of the Mass Shadow Generator superweapon during the war's final battle at the planet of Malachor V, which surrounded the planet with a destructive spatial phenomenon known as a mass shadow. Experiencing the shadow that obliterated almost everything on and around the planet made Nihilus crave Force energy. The affliction painfully ravaged his body while rendering him a wound in the Force. He was found by a seeker of these, the former Jedi Kreia, who became the Sith Lord Darth Traya and told him that she could teach him to feed his endless hunger. He accepted her offer of apprenticeship at the Trayus Academy on Malachor V, where he, over time, became one of three concurrent Dark Lords of the Sith.",
        "likes": 532,
        "feats": [
            "Devours planets",
            "immortal"
        ]
    },
    {
        "name": "General Grevious",
        "dueling": "60",
        "force": "0",
        "allegiance": "Dark Side",
        "fullPower": "62",
        "shortImg": "https://i.ibb.co/jJvzNq4/short-grevios.jpg",
        "fullImg": "https://i.ibb.co/q1DTnJ4/10eadfde7f8da84f55f5e4aa1eab7f12.jpg",
        "quote": "”He cares nothing for the Sith or its teachings… or the Jedi. And when the Jedi are dead, he will feed on the galaxy, the Republic, and eventually, consume the Sith as well.“",
        "author": "Kreia",
        "description": "Darth Nihilus was a Human male who reigned as a Dark Lord of the Sith during the era of strife following the Jedi Civil War. Before becoming a Sith Lord, he lost everything during the Galactic Republic's war against the Mandalorian Neo-Crusaders. He survived the activation of the Mass Shadow Generator superweapon during the war's final battle at the planet of Malachor V, which surrounded the planet with a destructive spatial phenomenon known as a mass shadow. Experiencing the shadow that obliterated almost everything on and around the planet made Nihilus crave Force energy. The affliction painfully ravaged his body while rendering him a wound in the Force. He was found by a seeker of these, the former Jedi Kreia, who became the Sith Lord Darth Traya and told him that she could teach him to feed his endless hunger. He accepted her offer of apprenticeship at the Trayus Academy on Malachor V, where he, over time, became one of three concurrent Dark Lords of the Sith.",
        "likes": 532,
        "feats": [
            "Devours planets",
            "immortal"
        ]
    },
    {
        "name": "Mace Windu",
        "dueling": "81",
        "force": "65",
        "allegiance": "Light Side",
        "fullPower": "81",
        "shortImg": "https://i.ibb.co/Rc1jbbD/windu-short.jpg",
        "fullImg": "https://i.ibb.co/4tssVGH/79203274bca96ed27c52530e855ccdb8.jpg",
        "quote": "”He cares nothing for the Sith or its teachings… or the Jedi. And when the Jedi are dead, he will feed on the galaxy, the Republic, and eventually, consume the Sith as well.“",
        "author": "Kreia",
        "description": "Darth Nihilus was a Human male who reigned as a Dark Lord of the Sith during the era of strife following the Jedi Civil War. Before becoming a Sith Lord, he lost everything during the Galactic Republic's war against the Mandalorian Neo-Crusaders. He survived the activation of the Mass Shadow Generator superweapon during the war's final battle at the planet of Malachor V, which surrounded the planet with a destructive spatial phenomenon known as a mass shadow. Experiencing the shadow that obliterated almost everything on and around the planet made Nihilus crave Force energy. The affliction painfully ravaged his body while rendering him a wound in the Force. He was found by a seeker of these, the former Jedi Kreia, who became the Sith Lord Darth Traya and told him that she could teach him to feed his endless hunger. He accepted her offer of apprenticeship at the Trayus Academy on Malachor V, where he, over time, became one of three concurrent Dark Lords of the Sith.",
        "likes": 532,
        "feats": [
            "Devours planets",
            "immortal"
        ]
    },
    {
        "name": "Obi-Wan Kenobi",
        "dueling": "77",
        "force": "62",
        "allegiance": "Light Side",
        "fullPower": "77",
        "shortImg": "https://i.ibb.co/Wk7L6bb/obi-short.jpg",
        "fullImg": "https://i.ibb.co/DK2CfhV/250-2502100-obi-wan-kenobi-wallpaper-wallperio.jpg",
        "quote": "”He cares nothing for the Sith or its teachings… or the Jedi. And when the Jedi are dead, he will feed on the galaxy, the Republic, and eventually, consume the Sith as well.“",
        "author": "Kreia",
        "description": "Darth Nihilus was a Human male who reigned as a Dark Lord of the Sith during the era of strife following the Jedi Civil War. Before becoming a Sith Lord, he lost everything during the Galactic Republic's war against the Mandalorian Neo-Crusaders. He survived the activation of the Mass Shadow Generator superweapon during the war's final battle at the planet of Malachor V, which surrounded the planet with a destructive spatial phenomenon known as a mass shadow. Experiencing the shadow that obliterated almost everything on and around the planet made Nihilus crave Force energy. The affliction painfully ravaged his body while rendering him a wound in the Force. He was found by a seeker of these, the former Jedi Kreia, who became the Sith Lord Darth Traya and told him that she could teach him to feed his endless hunger. He accepted her offer of apprenticeship at the Trayus Academy on Malachor V, where he, over time, became one of three concurrent Dark Lords of the Sith.",
        "likes": 532,
        "feats": [
            "Devours planets",
            "immortal"
        ]
    },
    {
        "name": "Yoda",
        "dueling": "84",
        "force": "85",
        "allegiance": "Light Side",
        "fullPower": "85",
        "shortImg": "https://i.ibb.co/23gcZZH/yoda-short.jpg",
        "fullImg": "https://i.ibb.co/DV39yRM/fb5c036a922c949f7b2bf34625ece6d6.jpg",
        "quote": "”He cares nothing for the Sith or its teachings… or the Jedi. And when the Jedi are dead, he will feed on the galaxy, the Republic, and eventually, consume the Sith as well.“",
        "author": "Kreia",
        "description": "Darth Nihilus was a Human male who reigned as a Dark Lord of the Sith during the era of strife following the Jedi Civil War. Before becoming a Sith Lord, he lost everything during the Galactic Republic's war against the Mandalorian Neo-Crusaders. He survived the activation of the Mass Shadow Generator superweapon during the war's final battle at the planet of Malachor V, which surrounded the planet with a destructive spatial phenomenon known as a mass shadow. Experiencing the shadow that obliterated almost everything on and around the planet made Nihilus crave Force energy. The affliction painfully ravaged his body while rendering him a wound in the Force. He was found by a seeker of these, the former Jedi Kreia, who became the Sith Lord Darth Traya and told him that she could teach him to feed his endless hunger. He accepted her offer of apprenticeship at the Trayus Academy on Malachor V, where he, over time, became one of three concurrent Dark Lords of the Sith.",
        "likes": 532,
        "feats": [
            "Devours planets",
            "immortal"
        ]
    },
    {
        "name": "Darth Raven",
        "dueling": "79",
        "force": "75",
        "allegiance": "Dark Side",
        "fullPower": "80",
        "shortImg": "https://i.ibb.co/16g4z2Z/actor-darth-revan-292007-large.jpg",
        "fullImg": "https://i.ibb.co/PNC3LF2/41744707f1748ace85d7964dc394aeb7.jpg",
        "quote": "”He cares nothing for the Sith or its teachings… or the Jedi. And when the Jedi are dead, he will feed on the galaxy, the Republic, and eventually, consume the Sith as well.“",
        "author": "Kreia",
        "description": "Darth Nihilus was a Human male who reigned as a Dark Lord of the Sith during the era of strife following the Jedi Civil War. Before becoming a Sith Lord, he lost everything during the Galactic Republic's war against the Mandalorian Neo-Crusaders. He survived the activation of the Mass Shadow Generator superweapon during the war's final battle at the planet of Malachor V, which surrounded the planet with a destructive spatial phenomenon known as a mass shadow. Experiencing the shadow that obliterated almost everything on and around the planet made Nihilus crave Force energy. The affliction painfully ravaged his body while rendering him a wound in the Force. He was found by a seeker of these, the former Jedi Kreia, who became the Sith Lord Darth Traya and told him that she could teach him to feed his endless hunger. He accepted her offer of apprenticeship at the Trayus Academy on Malachor V, where he, over time, became one of three concurrent Dark Lords of the Sith.",
        "likes": 532,
        "feats": [
            "Devours planets",
            "immortal"
        ]
    },
    {
        "name": "Darth Sidious",
        "dueling": "83",
        "force": "84",
        "allegiance": "Dark Side",
        "fullPower": "84",
        "shortImg": "https://i.ibb.co/6vFZ8Cd/artworks-1yq-Qp-FUXKYQd-Ol-Xw-9x3-JKQ-t500x500.jpg",
        "fullImg": "https://i.ibb.co/Zx3XTgx/6e3b790fc90b493220fa2ca0db3a25f1-lightning-star-wars-tattoo.jpg",
        "quote": "”He cares nothing for the Sith or its teachings… or the Jedi. And when the Jedi are dead, he will feed on the galaxy, the Republic, and eventually, consume the Sith as well.“",
        "author": "Kreia",
        "description": "Darth Nihilus was a Human male who reigned as a Dark Lord of the Sith during the era of strife following the Jedi Civil War. Before becoming a Sith Lord, he lost everything during the Galactic Republic's war against the Mandalorian Neo-Crusaders. He survived the activation of the Mass Shadow Generator superweapon during the war's final battle at the planet of Malachor V, which surrounded the planet with a destructive spatial phenomenon known as a mass shadow. Experiencing the shadow that obliterated almost everything on and around the planet made Nihilus crave Force energy. The affliction painfully ravaged his body while rendering him a wound in the Force. He was found by a seeker of these, the former Jedi Kreia, who became the Sith Lord Darth Traya and told him that she could teach him to feed his endless hunger. He accepted her offer of apprenticeship at the Trayus Academy on Malachor V, where he, over time, became one of three concurrent Dark Lords of the Sith.",
        "likes": 532,
        "feats": [
            "Devours planets",
            "immortal"
        ]
    },
    {
        "name": "Darth Vader",
        "dueling": "82",
        "force": "77",
        "allegiance": "Dark Side",
        "fullPower": "82",
        "shortImg": "https://i.ibb.co/n7Msncd/vader-short.jpg",
        "fullImg": "https://i.ibb.co/BNkKSnj/main-qimg-82ba47368cc1c45a4e43aebf8eac95ff-lq.jpg",
        "quote": "”He cares nothing for the Sith or its teachings… or the Jedi. And when the Jedi are dead, he will feed on the galaxy, the Republic, and eventually, consume the Sith as well.“",
        "author": "Kreia",
        "description": "Darth Nihilus was a Human male who reigned as a Dark Lord of the Sith during the era of strife following the Jedi Civil War. Before becoming a Sith Lord, he lost everything during the Galactic Republic's war against the Mandalorian Neo-Crusaders. He survived the activation of the Mass Shadow Generator superweapon during the war's final battle at the planet of Malachor V, which surrounded the planet with a destructive spatial phenomenon known as a mass shadow. Experiencing the shadow that obliterated almost everything on and around the planet made Nihilus crave Force energy. The affliction painfully ravaged his body while rendering him a wound in the Force. He was found by a seeker of these, the former Jedi Kreia, who became the Sith Lord Darth Traya and told him that she could teach him to feed his endless hunger. He accepted her offer of apprenticeship at the Trayus Academy on Malachor V, where he, over time, became one of three concurrent Dark Lords of the Sith.",
        "likes": 532,
        "feats": [
            "Devours planets",
            "immortal"
        ]
    },
    {
        "name": "Count Dooku",
        "dueling": "75",
        "force": "75",
        "allegiance": "Dark Side",
        "fullPower": "75",
        "shortImg": "https://i.ibb.co/Qbkhbvc/76b9f2a7298cf23432ef2d9def9ce44a.jpg",
        "fullImg": "https://i.ibb.co/MkkF6wY/45345e9b1b5fc0ad92caf81c2a183863.jpg",
        "quote": "”He cares nothing for the Sith or its teachings… or the Jedi. And when the Jedi are dead, he will feed on the galaxy, the Republic, and eventually, consume the Sith as well.“",
        "author": "Kreia",
        "description": "Darth Nihilus was a Human male who reigned as a Dark Lord of the Sith during the era of strife following the Jedi Civil War. Before becoming a Sith Lord, he lost everything during the Galactic Republic's war against the Mandalorian Neo-Crusaders. He survived the activation of the Mass Shadow Generator superweapon during the war's final battle at the planet of Malachor V, which surrounded the planet with a destructive spatial phenomenon known as a mass shadow. Experiencing the shadow that obliterated almost everything on and around the planet made Nihilus crave Force energy. The affliction painfully ravaged his body while rendering him a wound in the Force. He was found by a seeker of these, the former Jedi Kreia, who became the Sith Lord Darth Traya and told him that she could teach him to feed his endless hunger. He accepted her offer of apprenticeship at the Trayus Academy on Malachor V, where he, over time, became one of three concurrent Dark Lords of the Sith.",
        "likes": 532,
        "feats": [
            "Devours planets",
            "immortal"
        ]
    }
]

export function initialDataLoad() {
    charactersData.forEach(x => createCharacter(x))

}