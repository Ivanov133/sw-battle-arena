//This is only used to populate  data in the server

import { createCharacter } from "../services/characterService"
import { postCharacterRating } from "../services/ratingService"

export const charactersData = [
    {
        "name": "Darth Nihilus",
        "dueling": "76",
        "force": "89",
        "allegiance": "Dark Side",
        "fullPower": "95",
        "shortImg": "https://i.ibb.co/K2KFytc/an9jwo-V-460s.jpg",
        "fullImg": "https://i.ibb.co/WxH8x1t/main-qimg-4b62c2c5ce95673bb1a7ca3143987c83-c.jpg",
        "quote": "”He cares nothing for the Sith or its teachings… or the Jedi. And when the Jedi are dead, he will feed on the galaxy, the Republic, and eventually, consume the Sith as well.“",
        "author": "Kreia",
        "description": "Darth Nihilus was a Human male who reigned as a Dark Lord of the Sith during the era of strife following the Jedi Civil War. Before becoming a Sith Lord, he lost everything during the Galactic Republic's war against the Mandalorian Neo-Crusaders. He survived the activation of the Mass Shadow Generator superweapon during the war's final battle at the planet of Malachor V, which surrounded the planet with a destructive spatial phenomenon known as a mass shadow. Experiencing the shadow that obliterated almost everything on and around the planet made Nihilus crave Force energy. The affliction painfully ravaged his body while rendering him a wound in the Force. He was found by a seeker of these, the former Jedi Kreia, who became the Sith Lord Darth Traya and told him that she could teach him to feed his endless hunger. He accepted her offer of apprenticeship at the Trayus Academy on Malachor V, where he, over time, became one of three concurrent Dark Lords of the Sith.",
        "feats": [
            "Wound in the force",
            "Becomes stronger when fighting against strong force-user",
            "He was only matched by the Exile",
            "Part of the Sith Triumvirate"
        ]
    },
    {
        "name": "Darth Traya",
        "dueling": "73",
        "force": "66",
        "allegiance": "Dark Side",
        "fullPower": "74",
        "shortImg": "https://i.ibb.co/KxwMR8y/1-Qa-CY-3a-o-Bd-Ke-B-Sv3-Rng.png",
        "fullImg": "https://i.ibb.co/ZhZWgw4/darth-traya-betrayer-of-the-force-kotor-2-by-kevvvvvv-deskl88-fullview.jpg",
        "quote": "”Aliquam est lacus, convallis nec erat id, molestie molestie felis. Mauris id dui aliquam, sagittis risus vel, consequat purus.“",
        "author": "Test Quote",
        "description": "Aliquam est lacus, convallis nec erat id, molestie molestie felis. Mauris id dui aliquam, sagittis risus vel, consequat purus. Curabitur efficitur, justo nec tristique feugiat, mauris justo finibus libero, nec fringilla nisi sem convallis diam. Nulla non leo id orci mattis sagittis. Suspendisse potenti. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin aliquet, tellus eu maximus gravida, nisl odio dictum risus, a finibus dui nisi lobortis erat. Ut commodo bibendum ullamcorper. Vestibulum in lacus eu mauris imperdiet scelerisque vitae ullamcorper justo. Quisque vulputate ex eget nibh pretium, in feugiat sem tincidunt.Aliquam erat volutpat. Etiam malesuada felis ac ipsum pellentesque tempus. Curabitur tellus mi, tempus sed ornare at, porttitor dapibus nulla. Pellentesque quis faucibus lorem, a faucibus velit. Vestibulum non tincidunt mauris, id elementum risus. Nulla in fringilla lectus. Curabitur vestibulum fringilla metus nec ornare. Aliquam mollis hendrerit lacus vitae lacinia. Sed faucibus malesuada lacus, eu varius dolor. Vivamus consectetur lectus nec turpis auctor viverra. Pellentesque tincidunt in magna nec venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In ac rhoncus enim.",
        "feats": [
            "Trained Nihilus, Sion and Revan",
            "Commands multiple lightsabers with the force",
            "Very cunning and treacherous",
            "Founder of the Sith Triumvirate"
        ]
    },
    {
        "name": "Darth Sion",
        "dueling": "70",
        "force": "67",
        "allegiance": "Dark Side",
        "fullPower": "80",
        "shortImg": "https://i.ibb.co/9qxYcXR/1259203-darthsion.jpg",
        "fullImg": "https://i.ibb.co/n6fwYWz/best-characters-in-star-wars-galaxy-of-heroes.jpg",
        "quote": "”Aliquam est lacus, convallis nec erat id, molestie molestie felis. Mauris id dui aliquam, sagittis risus vel, consequat purus.“",
        "author": "Test Quote",
        "description": "Aliquam est lacus, convallis nec erat id, molestie molestie felis. Mauris id dui aliquam, sagittis risus vel, consequat purus. Curabitur efficitur, justo nec tristique feugiat, mauris justo finibus libero, nec fringilla nisi sem convallis diam. Nulla non leo id orci mattis sagittis. Suspendisse potenti. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin aliquet, tellus eu maximus gravida, nisl odio dictum risus, a finibus dui nisi lobortis erat. Ut commodo bibendum ullamcorper. Vestibulum in lacus eu mauris imperdiet scelerisque vitae ullamcorper justo. Quisque vulputate ex eget nibh pretium, in feugiat sem tincidunt.Aliquam erat volutpat. Etiam malesuada felis ac ipsum pellentesque tempus. Curabitur tellus mi, tempus sed ornare at, porttitor dapibus nulla. Pellentesque quis faucibus lorem, a faucibus velit. Vestibulum non tincidunt mauris, id elementum risus. Nulla in fringilla lectus. Curabitur vestibulum fringilla metus nec ornare. Aliquam mollis hendrerit lacus vitae lacinia. Sed faucibus malesuada lacus, eu varius dolor. Vivamus consectetur lectus nec turpis auctor viverra. Pellentesque tincidunt in magna nec venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In ac rhoncus enim.",
        "feats": [
            "Pretty much immportal",
            "Unlimited endurance - wears down the oponent",
            "Part of the Sith Triumvirate"
        ]
    },
    {
        "name": "Darth Raven",
        "dueling": "79",
        "force": "79",
        "allegiance": "Dark Side",
        "fullPower": "80",
        "shortImg": "https://i.ibb.co/16g4z2Z/actor-darth-revan-292007-large.jpg",
        "fullImg": "https://i.ibb.co/PNC3LF2/41744707f1748ace85d7964dc394aeb7.jpg",
        "quote": "”Is that what he was? Or was he always true to himself, no matter what personality he wore? And there is something that the Council may never understand. That perhaps Revan never fell. The difference between a fall and a sacrifice is sometimes difficult, but I feel that Revan understood that difference, more than anyone knew. The galaxy would have fallen if Revan had not gone to war. Perhaps he became the dark lord out of necessity, to prevent a greater evil.“",
        "author": "Kreia",
        "description": "Revan was a Sith Lord and the namesake of the Sith Eternal army's 3rd Legion. Since the history of the Sith was kept hidden from the galaxy, only Sith cultists knew the significance of Revan's name.[1] Between 3 and 4 ABY,[3] cultists searching the catacombs beneath the Sith Citadel on the planet Exegol repeated Revan's name in something similar to a chant, along with the names of other Sith.Revan was originally introduced in the Star Wars Legends continuity in BioWare and LucasArts's 2003 video game Star Wars: Knights of the Old Republic. In Legends, Revan was a Jedi Knight who broke away from the Jedi Order, became a Dark Lord of the Sith, and formed a Sith Empire that waged war against the Order and the Galactic Republic. While experiencing amnesia, the former Sith was retrained as a Jedi to confront the Sith Empire, Revan's own creation. As the playable character of the game, Revan's physical characteristics and gender were customizable by the player for gameplay purposes; the 2005 reference book The New Essential Chronology then established Revan's gender as male and canonized the light-side ending. Following the events of the game, Revan eventually confronted the True Sith and helped destroy its leader.",
        "feats": [
            "One of the strongest force users of the Old Republic",
            "Was able to return from the dark side and save the galaxy",
            "Genius strategist and commander"
        ]
    },
    {
        "name": "Bastila Shan",
        "dueling": "62",
        "force": "70",
        "allegiance": "Light Side",
        "fullPower": "66",
        "shortImg": "https://i.ibb.co/Bq1HxTX/Capture.jpg",
        "fullImg": "https://i.ibb.co/W69MH0N/aa7b0426a6a54305940aa2a677b2f6ef-star-wars-kotor-bastila.jpg",
        "quote": "”Aliquam est lacus, convallis nec erat id, molestie molestie felis. Mauris id dui aliquam, sagittis risus vel, consequat purus.“",
        "author": "Test Quote",
        "description": "Aliquam est lacus, convallis nec erat id, molestie molestie felis. Mauris id dui aliquam, sagittis risus vel, consequat purus. Curabitur efficitur, justo nec tristique feugiat, mauris justo finibus libero, nec fringilla nisi sem convallis diam. Nulla non leo id orci mattis sagittis. Suspendisse potenti. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin aliquet, tellus eu maximus gravida, nisl odio dictum risus, a finibus dui nisi lobortis erat. Ut commodo bibendum ullamcorper. Vestibulum in lacus eu mauris imperdiet scelerisque vitae ullamcorper justo. Quisque vulputate ex eget nibh pretium, in feugiat sem tincidunt.Aliquam erat volutpat. Etiam malesuada felis ac ipsum pellentesque tempus. Curabitur tellus mi, tempus sed ornare at, porttitor dapibus nulla. Pellentesque quis faucibus lorem, a faucibus velit. Vestibulum non tincidunt mauris, id elementum risus. Nulla in fringilla lectus. Curabitur vestibulum fringilla metus nec ornare. Aliquam mollis hendrerit lacus vitae lacinia. Sed faucibus malesuada lacus, eu varius dolor. Vivamus consectetur lectus nec turpis auctor viverra. Pellentesque tincidunt in magna nec venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In ac rhoncus enim.",
        "feats": [
            "Battle Meditation - a very strong supporter",
            "Overall a good duelist and force user",
        ]
    },
    {
        "name": "Darth Malak",
        "dueling": "75",
        "force": "75",
        "allegiance": "Dark Side",
        "fullPower": "75",
        "shortImg": "https://i.ibb.co/4ty6HrP/ed291d4e9f9da0ded0628d0ebd9e426c.jpg",
        "fullImg": "https://i.ibb.co/d7V6JXz/a4-RZAKw-460s.jpg",
        "quote": "”Aliquam est lacus, convallis nec erat id, molestie molestie felis. Mauris id dui aliquam, sagittis risus vel, consequat purus.“",
        "author": "Test Quote",
        "description": "Aliquam est lacus, convallis nec erat id, molestie molestie felis. Mauris id dui aliquam, sagittis risus vel, consequat purus. Curabitur efficitur, justo nec tristique feugiat, mauris justo finibus libero, nec fringilla nisi sem convallis diam. Nulla non leo id orci mattis sagittis. Suspendisse potenti. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin aliquet, tellus eu maximus gravida, nisl odio dictum risus, a finibus dui nisi lobortis erat. Ut commodo bibendum ullamcorper. Vestibulum in lacus eu mauris imperdiet scelerisque vitae ullamcorper justo. Quisque vulputate ex eget nibh pretium, in feugiat sem tincidunt.Aliquam erat volutpat. Etiam malesuada felis ac ipsum pellentesque tempus. Curabitur tellus mi, tempus sed ornare at, porttitor dapibus nulla. Pellentesque quis faucibus lorem, a faucibus velit. Vestibulum non tincidunt mauris, id elementum risus. Nulla in fringilla lectus. Curabitur vestibulum fringilla metus nec ornare. Aliquam mollis hendrerit lacus vitae lacinia. Sed faucibus malesuada lacus, eu varius dolor. Vivamus consectetur lectus nec turpis auctor viverra. Pellentesque tincidunt in magna nec venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In ac rhoncus enim.",
        "feats": [
            "Was able to tap into the power of the Star Forge",
            "Ravens companion",
            "Very strong in lightsaber dueling"
        ]
    },
    {
        "name": "Visas Marr",
        "dueling": "50",
        "force": "60",
        "allegiance": "Light Side",
        "fullPower": "52",
        "shortImg": "https://i.ibb.co/3SfFsNT/58.jpg",
        "fullImg": "https://i.ibb.co/CvhZbG7/ENyo3-h-Xs-AAz-Awa.jpg",
        "quote": "”Aliquam est lacus, convallis nec erat id, molestie molestie felis. Mauris id dui aliquam, sagittis risus vel, consequat purus.“",
        "author": "Test Quote",
        "description": "Aliquam est lacus, convallis nec erat id, molestie molestie felis. Mauris id dui aliquam, sagittis risus vel, consequat purus. Curabitur efficitur, justo nec tristique feugiat, mauris justo finibus libero, nec fringilla nisi sem convallis diam. Nulla non leo id orci mattis sagittis. Suspendisse potenti. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin aliquet, tellus eu maximus gravida, nisl odio dictum risus, a finibus dui nisi lobortis erat. Ut commodo bibendum ullamcorper. Vestibulum in lacus eu mauris imperdiet scelerisque vitae ullamcorper justo. Quisque vulputate ex eget nibh pretium, in feugiat sem tincidunt.Aliquam erat volutpat. Etiam malesuada felis ac ipsum pellentesque tempus. Curabitur tellus mi, tempus sed ornare at, porttitor dapibus nulla. Pellentesque quis faucibus lorem, a faucibus velit. Vestibulum non tincidunt mauris, id elementum risus. Nulla in fringilla lectus. Curabitur vestibulum fringilla metus nec ornare. Aliquam mollis hendrerit lacus vitae lacinia. Sed faucibus malesuada lacus, eu varius dolor. Vivamus consectetur lectus nec turpis auctor viverra. Pellentesque tincidunt in magna nec venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In ac rhoncus enim.",
        "feats": [
            "Trained by Nihilus",
            "Miraluka clan member"
        ]
    },
    {
        "name": "Darth Maul",
        "dueling": "66",
        "force": "45",
        "allegiance": "Dark Side",
        "fullPower": "62",
        "shortImg": "https://i.ibb.co/vvQbXgq/short-maul.jpg",
        "fullImg": "https://i.ibb.co/5WySGgJ/8835584610c86b2aa3d7a0b1821aedc7.jpg",
        "quote": "”The Sith took everything from me. Ripped me from my mother's arms, murdered my brother, used me as a weapon and then cast me aside. Abandoned me. Once, I had power, now I have nothing. Nothing.”",
        "author": "Maul",
        "description": "Maul was a Force-sensitive Dathomirian Zabrak male who established himself as a crime lord during the reign of the Galactic Empire. He was once known as Darth Maul when he was the apprentice of Darth Sidious, and therefore, a Dark Lord of the Sith. Having trained in the ways of the Force, Darth Maul was a formidable warrior strong with the dark side and possessed deadly skills in lightsaber combat. In addition, he was a scheming mastermind who plotted his return to power despite losing his place in the ranks of the Sith.",
        "feats": [
            "Very strong and durable duelist",
            "Was able to defeat Jedi Master - Qui Gon Jin at a very young age",
            "Trained by Darth Sidious himself"
        ]
    },
    {
        "name": "General Grevious",
        "dueling": "55",
        "force": "0",
        "allegiance": "Dark Side",
        "fullPower": "55",
        "shortImg": "https://i.ibb.co/jJvzNq4/short-grevios.jpg",
        "fullImg": "https://i.ibb.co/q1DTnJ4/10eadfde7f8da84f55f5e4aa1eab7f12.jpg",
        "quote": "”I'm no errand boy. And I am not in this war for Dooku's politics. I am the leader of the most powerful droid army the galaxy has ever seen.An army with no loyalty, no spirit, just programming. What have you to show for all your power? What have you to gain?The future! A future where there are no Jedi.“",
        "author": "Grievous ",
        "description": "Grievous, born Qymaen jai Sheelal, was a Kaleesh male warlord who served within the military forces of the Confederacy of Independent Systems as a commanding officer during the Clone Wars in the final years of the Republic Era. In addition to his position as a general within the Separatist Droid Army, the Kaleesh held the title of Supreme Martial Commander of the Separatist Droid Armies throughout the duration of the war, in which he led countless engagements against the Republic's Grand Army. Recognized for his ruthless tactics and extensive cybernetic enhancements, Grievous utilized the Separatist Droid Army and his adept combat skills to instill fear throughout the galaxy as he traveled to and invaded planets, while also engaging numerous Knights of the Jedi Order, his sworn enemies.",
        "feats": [
            "Very intimidating duelist. Wields six lightsabers at the same time",
            "Learns from every battle and copies the opponent's style",
            "Has the upper hand against jedi who rely mostly on melee battle"
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
        "quote": "”My name is General Mace Windu of the Jedi Order. At this point of the Clone War, I have dismantled and destroyed over 100,000 of you type one battle droids. I'm giving you an opportunity to peacefully lay down your weapons, so that you may be reprogrammed to serve a better purpose than spreading the mindless violence and chaos which you have inflicted upon the galaxy.“",
        "author": "Mace Windu, to an army of battle droids",
        "description": "Mace Windu was a revered Force-sensitive human male Jedi Master and member of the Jedi High Council during the last years of the Republic Era. During his time in the Jedi Order, he once served as elected leader of the Jedi and, during the Clone Wars, as a Jedi General in the Grand Army of the Republic. He was the greatest champion of the Jedi Order and promoted its ancient traditions amidst the growing influence of the dark side of the Force in the corrupt, declining days of the Republic.As the war drew to a close, Windu became increasingly suspicious of the chancellor's motives, as Palpatine had amassed near-dictatorial control over the Galactic Senate, and sensed the rising power of the dark side in the galaxy. His suspicions were confirmed when Anakin Skywalker, a Jedi Knight and the Chosen One of ancient prophecy, discovered that Palpatine was Darth Sidious, the Dark Lord of the Sith who manipulated and deceived the Republic and the Separatist Alliance into war. Windu, along with Jedi Masters Kit Fisto, Saesee Tiin, and Agen Kolar, confronted Palpatine with the intention of arresting him. Instead, the Dark Lord attacked them, striking them down one by one until only Windu was left. Windu bested Palpatine in the confrontation and—deciding the chancellor was too dangerous to be left alive due to his influence over the government—prepared to strike him down, but the intervention of Anakin Skywalker, who betrayed Windu and saved the chancellor's life, led to Windu's death. As a result, Skywalker fell to the temptation of the dark side and was renamed Darth Vader.",
        "feats": [
            "Creator and the only jedi master to fight with Vaapad style",
            "He is extremely skillfull in combat and is only matched by a very few jedi",
            "He is much stronger when he battles Dark side force users",
            "Arguably won a duel against Darth Sidious"
        ]
    },
    {
        "name": "Obi-Wan Kenobi - Clone wars era",
        "dueling": "72",
        "force": "62",
        "allegiance": "Light Side",
        "fullPower": "73",
        "shortImg": "https://i.ibb.co/Wk7L6bb/obi-short.jpg",
        "fullImg": "https://i.ibb.co/DK2CfhV/250-2502100-obi-wan-kenobi-wallpaper-wallperio.jpg",
        "quote": "”Hello there! :)“",
        "author": "Obi",
        "description": "Obi-Wan Kenobi was a legendary Force-sensitive human male Jedi Master who served on the Jedi High Council during the final years of the Republic Era. As a Jedi General, Kenobi served in the Grand Army of the Republic that fought against the Separatist Droid Army during the Clone Wars. Kenobi, however, was forced into exile as a result of the Great Jedi Purge. As a mentor, Kenobi was responsible for training two members of the Skywalker family, Anakin and Luke Skywalker, both of whom served in turn as his Padawan in the ways of the Force.Kenobi was born on the planet Stewjon in 57 BBY. He was Force-sensitive, and therefore taken from his family and inducted into the Jedi Order as a child. Raised in the Jedi Temple on the planet Coruscant, Kenobi was assigned to Jedi Master Qui-Gon Jinn. In 32 BBY, Kenobi attained the rank of Jedi Knight by defeating the Sith Lord Darth Maul during the Invasion of Naboo. He also chose to train Anakin Skywalker—the prophesied Chosen One who was destined to destroy the Sith and restore balance to the Force—having promised Jinn who died in the lightsaber duel against Maul.",
        "feats": [
            "In his peak he was considered to be one (if not 'the') most powerfull Suresu form duelist",
            "Overall one of the strongest Jedi Masters",
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
        "quote": "”Size matters not. Look at me. Judge me by my size, do you? Hmm? Hmm. And well you should not. For my ally is the Force, and a powerful ally it is. Life creates it, makes it grow. Its energy surrounds us and binds us. Luminous beings are we, not this crude matter. You must feel the Force around you; here, between you, me, the tree, the rock, everywhere, yes. Even between the land and the ship.“",
        "author": "Yoda, to Luke",
        "description": "Born in 896 BBY, Yoda was almost nine hundred years old in the latter days of the Republic. A leading member of the Jedi High Council, his contemporaries included other legendary Masters such as Mace Windu and Ki-Adi-Mundi. During the Invasion of Naboo in 32 BBY, the maverick Qui-Gon Jinn introduced Anakin Skywalker to the High Council, believing with absolute certainty that he had discovered the prophesied Chosen One. The Jedi elders sensed that the boy was full of fear and anger and declined to train him, deeming Skywalker too old and emotionally compromised to commit himself to the Jedi Code. After Jinn's death during the liberation of Naboo, the High Council reversed their decision in spite of Yoda's continued opposition to Skywalker's apprenticeship, having sensed grave danger in his training. At the same time, the Jedi discovered that their ancient nemesis, the Sith, had returned after a millennium in hiding. Aware of the Rule of Two, Yoda was convinced that at least one more Sith Lord remained active following Obi-Wan Kenobi's victory over the Sith apprentice Darth Maul.",
        "feats": [
            "One of the few Jedi to be ranked as Grand Masters of the Jedi order",
            "Lived for over 800 years",
            "Strong in both dueling and force",
            "Trainerd"
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
        "quote": "”There is only one plan—one great design which shall govern the universe—mine.“",
        "author": "Darth Sidious",
        "description": "Darth Sidious, born Sheev Palpatine and also known simply as the Emperor, was a human male Dark Lord of the Sith and Emperor of the Galactic Empire, ruling from 19 BBY to 4 ABY. Rising to power in the Galactic Senate as the senator of Naboo, the secretive Sith Lord cultivated two identities, Sidious and Palpatine, using both to further his political career and deceive his way into accomplishing his goal. He orchestrated the fall of the Galactic Republic and the Jedi Order through the Clone Wars, and then established his reign over the galaxy which lasted until his death at the Battle of Endor. However, the dark side of the Force gave rise to powers which allowed the Emperor to return from the grave.",
        "feats": [
            "Unlimited Power...",
            "Was able to fool the jedi order and operate through the senate",
            "Trained by Darth Plagius the Wise"
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
        "quote": "”Do you believe you are the Chosen One?How can I know?I can tell you what I believe. I believe you will bring balance to the Force. That you will face your demons and save the universe.“",
        "author": "Qui-Gon Jinn and Anakin Skywalker",
        "description": "Anakin Skywalker was a legendary Force-sensitive human male who was a Jedi Knight of the Galactic Republic and the prophesied Chosen One of the Jedi Order, destined to bring balance to the Force. Also known as 'Ani' during his childhood, Skywalker earned the moniker 'Hero With No Fear' from his accomplishments in the Clone Wars. His alter ego, Darth Vader, the Dark Lord of the Sith, was created when Skywalker turned to the dark side of the Force, pledging his allegiance to the Sith Lord Darth Sidious at the end of the Republic Era.A vergence in the Force, Skywalker was born on the desert planet of Tatooine in the Outer Rim Territories in 41 BBY. He was the son of Shmi Skywalker, a slave who conceived a child without a father. His blood contained over twenty-thousand midi-chlorians, surpassing that of Grand Master Yoda and all other Jedi in the galaxy. Qui-Gon Jinn, the Jedi Master who discovered Skywalker during the Invasion of Naboo in 32 BBY, theorized that Skywalker was conceived by the midi-chlorians. Following the Battle of Naboo, the Jedi High Council admitted Skywalker into the Order as the Padawan of Jedi Knight Obi-Wan Kenobi despite feeling that he was too old and emotional to adhere to the Jedi Code. During the early days of the Clone Wars, Skywalker served as a Jedi General in the Grand Army of the Republic, commanding the clone troopers of the elite 501st Legion against the Confederacy of Independent Systems. He also oversaw the Jedi training of his own apprentice, Ahsoka Tano, after receiving his knighthood. Although Jedi doctrine prohibited personal relationships, Skywalker had a secret wife, Senator Padmé Amidala of Naboo.",
        "feats": [
            "Very aggresive duelist",
            "Strong both in melee and force",
            "Trained by Obi Wan and Sidious"
        ]
    },
    {
        "name": "Count Dooku",
        "dueling": "71",
        "force": "69",
        "allegiance": "Dark Side",
        "fullPower": "71",
        "shortImg": "https://i.ibb.co/Qbkhbvc/76b9f2a7298cf23432ef2d9def9ce44a.jpg",
        "fullImg": "https://i.ibb.co/MkkF6wY/45345e9b1b5fc0ad92caf81c2a183863.jpg",
        "quote": "”Soon enough, you will stop denying the truth of so very many things. And you will understand that I am not a traitor, but a visionary! Fear leads to anger, anger leads to hate, hatred leads to suffering. But what the Jedi failed to teach you, what I have learned, is how to persevere, to pass through the suffering, and achieve ultimate power!“",
        "author": "Count Dooku, to Quinlan Vos",
        "description": "Born in 102 BBY during the High Republic Era, Dooku was taken by the Jedi Order after being abandoned by his family and learned the Jedi arts as the Padawan of Yoda, the legendary Grand Master of the Jedi Order. A political idealist, the corruption in the Galactic Senate—as well as the traditions of the Jedi—disillusioned him, causing Dooku to voluntarily leave the Order and return to his homeworld, where he reclaimed his title of Count and heritage as a nobleman after overthrowing his corrupt brother, Ramil. His former peers believed his decision was misguided but still held him in high esteem. Unknown to the Jedi, however, Dooku not only renounced their ways but his commitment to the light side of the Force as well. Having sworn his allegiance to Darth Sidious, Dooku became the Dark Lord's apprentice and adopted the secret name of Darth Tyranus. Throughout the first decade of Sheev Palpatine's chancellery, Dooku used his resources and charisma to recruit entire star systems to the Separatist cause. At the same time, he oversaw the development of two vast armies that would be pitted against each other in the conflict to come: the Separatist Droid Army, which consisted entirely of battle droids manufactured on Geonosis; and the Grand Army of the Republic, composed by clone troopers bred on Kamino and modeled on the bounty hunter Jango Fett.",
        "feats": [
            "One of the strongest duelist of his time",
            "Trained by Yoda and said to match the skills of Mace Windu",
            "Favours lightsaber combat"
        ]
    },
    {
        "name": "Asaj Ventress",
        "dueling": "52",
        "force": "45",
        "allegiance": "Dark Side",
        "fullPower": "45",
        "shortImg": "https://i.ibb.co/G0Xpvvs/darren-tan-asajjventress-mythos-cu1.jpg",
        "fullImg": "https://i.ibb.co/XSsLKbJ/63092eac44ec524cae6d1a63317326d4.jpg",
        "quote": "”Aliquam est lacus, convallis nec erat id, molestie molestie felis. Mauris id dui aliquam, sagittis risus vel, consequat purus.“",
        "author": "Test Quote",
        "description": "Aliquam est lacus, convallis nec erat id, molestie molestie felis. Mauris id dui aliquam, sagittis risus vel, consequat purus. Curabitur efficitur, justo nec tristique feugiat, mauris justo finibus libero, nec fringilla nisi sem convallis diam. Nulla non leo id orci mattis sagittis. Suspendisse potenti. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin aliquet, tellus eu maximus gravida, nisl odio dictum risus, a finibus dui nisi lobortis erat. Ut commodo bibendum ullamcorper. Vestibulum in lacus eu mauris imperdiet scelerisque vitae ullamcorper justo. Quisque vulputate ex eget nibh pretium, in feugiat sem tincidunt.Aliquam erat volutpat. Etiam malesuada felis ac ipsum pellentesque tempus. Curabitur tellus mi, tempus sed ornare at, porttitor dapibus nulla. Pellentesque quis faucibus lorem, a faucibus velit. Vestibulum non tincidunt mauris, id elementum risus. Nulla in fringilla lectus. Curabitur vestibulum fringilla metus nec ornare. Aliquam mollis hendrerit lacus vitae lacinia. Sed faucibus malesuada lacus, eu varius dolor. Vivamus consectetur lectus nec turpis auctor viverra. Pellentesque tincidunt in magna nec venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In ac rhoncus enim.",
        "feats": [
            "Trained by Dooku - overall a strong duelist",
            "Nightsister"
        ]
    },
    {
        "name": "Qui-Gon Jinn",
        "dueling": "62",
        "force": "65",
        "allegiance": "Light Side",
        "fullPower": "62",
        "shortImg": "https://i.ibb.co/6rntcjF/Qui-Gon-Jinn.webp",
        "fullImg": "https://i.ibb.co/p01Lh9y/57d1dfb6af7d4de2466a33bbd35a6052.jpg",
        "quote": "”Aliquam est lacus, convallis nec erat id, molestie molestie felis. Mauris id dui aliquam, sagittis risus vel, consequat purus.“",
        "author": "Test Quote",
        "description": "Aliquam est lacus, convallis nec erat id, molestie molestie felis. Mauris id dui aliquam, sagittis risus vel, consequat purus. Curabitur efficitur, justo nec tristique feugiat, mauris justo finibus libero, nec fringilla nisi sem convallis diam. Nulla non leo id orci mattis sagittis. Suspendisse potenti. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin aliquet, tellus eu maximus gravida, nisl odio dictum risus, a finibus dui nisi lobortis erat. Ut commodo bibendum ullamcorper. Vestibulum in lacus eu mauris imperdiet scelerisque vitae ullamcorper justo. Quisque vulputate ex eget nibh pretium, in feugiat sem tincidunt.Aliquam erat volutpat. Etiam malesuada felis ac ipsum pellentesque tempus. Curabitur tellus mi, tempus sed ornare at, porttitor dapibus nulla. Pellentesque quis faucibus lorem, a faucibus velit. Vestibulum non tincidunt mauris, id elementum risus. Nulla in fringilla lectus. Curabitur vestibulum fringilla metus nec ornare. Aliquam mollis hendrerit lacus vitae lacinia. Sed faucibus malesuada lacus, eu varius dolor. Vivamus consectetur lectus nec turpis auctor viverra. Pellentesque tincidunt in magna nec venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In ac rhoncus enim.",
        "feats": [
            "Trained Obi Wan",
            "Trained by Dooku",
            "Good duelist"
        ]
    },
    {
        "name": "Luke Skywalker",
        "dueling": "82",
        "force": "82",
        "allegiance": "Light Side",
        "fullPower": "83",
        "shortImg": "https://i.ibb.co/7rhQqT3/main-qimg-245c16f1758674f110c6251ca1707da2-lq.jpg",
        "fullImg": "https://i.ibb.co/JdkX0dm/608cceee95fe0cb8b2c8ab57fb4f544c.jpg",
        "quote": "”Aliquam est lacus, convallis nec erat id, molestie molestie felis. Mauris id dui aliquam, sagittis risus vel, consequat purus.“",
        "author": "Test Quote",
        "description": "Aliquam est lacus, convallis nec erat id, molestie molestie felis. Mauris id dui aliquam, sagittis risus vel, consequat purus. Curabitur efficitur, justo nec tristique feugiat, mauris justo finibus libero, nec fringilla nisi sem convallis diam. Nulla non leo id orci mattis sagittis. Suspendisse potenti. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin aliquet, tellus eu maximus gravida, nisl odio dictum risus, a finibus dui nisi lobortis erat. Ut commodo bibendum ullamcorper. Vestibulum in lacus eu mauris imperdiet scelerisque vitae ullamcorper justo. Quisque vulputate ex eget nibh pretium, in feugiat sem tincidunt.Aliquam erat volutpat. Etiam malesuada felis ac ipsum pellentesque tempus. Curabitur tellus mi, tempus sed ornare at, porttitor dapibus nulla. Pellentesque quis faucibus lorem, a faucibus velit. Vestibulum non tincidunt mauris, id elementum risus. Nulla in fringilla lectus. Curabitur vestibulum fringilla metus nec ornare. Aliquam mollis hendrerit lacus vitae lacinia. Sed faucibus malesuada lacus, eu varius dolor. Vivamus consectetur lectus nec turpis auctor viverra. Pellentesque tincidunt in magna nec venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In ac rhoncus enim.",
        "feats": [
            "Defeated Vader",
            "Skywalker bloodline - one of the strongest force users to ever lived",
            "Trained by Obi Wan Kenobi and Yoda"
        ]
    },

    {
        "name": "Anakin Skywalker",
        "dueling": "79",
        "force": "77",
        "allegiance": "Light Side",
        "fullPower": "82",
        "shortImg": "https://i.ibb.co/pnm7T5N/5aa2e72d8a316235e1d1b53e829847c4.jpg",
        "fullImg": "https://i.ibb.co/Jm0Wzmd/6465f47a087a389d0b280312079a17fe.jpg",
        "quote": "”Aliquam est lacus, convallis nec erat id, molestie molestie felis. Mauris id dui aliquam, sagittis risus vel, consequat purus.“",
        "author": "Test Quote",
        "description": "Aliquam est lacus, convallis nec erat id, molestie molestie felis. Mauris id dui aliquam, sagittis risus vel, consequat purus. Curabitur efficitur, justo nec tristique feugiat, mauris justo finibus libero, nec fringilla nisi sem convallis diam. Nulla non leo id orci mattis sagittis. Suspendisse potenti. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin aliquet, tellus eu maximus gravida, nisl odio dictum risus, a finibus dui nisi lobortis erat. Ut commodo bibendum ullamcorper. Vestibulum in lacus eu mauris imperdiet scelerisque vitae ullamcorper justo. Quisque vulputate ex eget nibh pretium, in feugiat sem tincidunt.Aliquam erat volutpat. Etiam malesuada felis ac ipsum pellentesque tempus. Curabitur tellus mi, tempus sed ornare at, porttitor dapibus nulla. Pellentesque quis faucibus lorem, a faucibus velit. Vestibulum non tincidunt mauris, id elementum risus. Nulla in fringilla lectus. Curabitur vestibulum fringilla metus nec ornare. Aliquam mollis hendrerit lacus vitae lacinia. Sed faucibus malesuada lacus, eu varius dolor. Vivamus consectetur lectus nec turpis auctor viverra. Pellentesque tincidunt in magna nec venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In ac rhoncus enim.",
        "feats": [
            "A force anomaly - conceived through midacholorian manipulation",
            "By the time of the clone wars, he was able to defeat opponents such as Dooku by himself",
            "If he was not crippled by the battle with Obi Wan, arguably would have surpass the Emperor in power"
        ]
    },
    {
        "name": "Boss",
        "dueling": "15",
        "force": "0",
        "allegiance": "Light Side",
        "fullPower": "5",
        "shortImg": "https://i.ibb.co/DDfYWFY/wallpapersden-com-76337-2200x2480.jpg",
        "fullImg": "https://i.ibb.co/hYyrLPQ/thumb-1920-814626.jpg",
        "quote": "”Aliquam est lacus, convallis nec erat id, molestie molestie felis. Mauris id dui aliquam, sagittis risus vel, consequat purus.“",
        "author": "Test Quote",
        "description": "Aliquam est lacus, convallis nec erat id, molestie molestie felis. Mauris id dui aliquam, sagittis risus vel, consequat purus. Curabitur efficitur, justo nec tristique feugiat, mauris justo finibus libero, nec fringilla nisi sem convallis diam. Nulla non leo id orci mattis sagittis. Suspendisse potenti. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin aliquet, tellus eu maximus gravida, nisl odio dictum risus, a finibus dui nisi lobortis erat. Ut commodo bibendum ullamcorper. Vestibulum in lacus eu mauris imperdiet scelerisque vitae ullamcorper justo. Quisque vulputate ex eget nibh pretium, in feugiat sem tincidunt.Aliquam erat volutpat. Etiam malesuada felis ac ipsum pellentesque tempus. Curabitur tellus mi, tempus sed ornare at, porttitor dapibus nulla. Pellentesque quis faucibus lorem, a faucibus velit. Vestibulum non tincidunt mauris, id elementum risus. Nulla in fringilla lectus. Curabitur vestibulum fringilla metus nec ornare. Aliquam mollis hendrerit lacus vitae lacinia. Sed faucibus malesuada lacus, eu varius dolor. Vivamus consectetur lectus nec turpis auctor viverra. Pellentesque tincidunt in magna nec venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In ac rhoncus enim.",
        "feats": [
            "Delta squad leader",
            "One of the Elite clone trooper",
        ]
    },
    {
        "name": "Darth Jar Jar",
        "dueling": "75",
        "force": "80",
        "allegiance": "Dark Side",
        "fullPower": "80",
        "shortImg": "https://i.ibb.co/QMCWfv4/der4um8-a819167e-e482-4ab1-8167-d98acf5162fb.jpg",
        "fullImg": "https://i.ibb.co/cNx2Qy8/darth-jar-jar-binks-by-nequarilj-dcrq580-fullview.jpg",
        "quote": "”Misa the real Sith Lord“",
        "author": "Jar Jar",
        "description": "The untold story of the real Prequels villian. The Force jumps? The hidden mind tricks? The role he played in the election of Palpatine for senator and emergency power? Sabotages Qui Gon and Obi so they can find Anakin? Droids hate him? The red eyes? For more info, please watch the conspiracy theory online :)",
        "feats": [
            "Hidden power, or just clumsy",
            "If you don't like this character, please contact sys admin",
        ]
    },

]

export function loadData(x) {

    createCharacter(x).then(result => {
        const ratingData = {
            "character_id": result._id,
            "rating_value": 5
        }
        postCharacterRating(ratingData)
    })

}
