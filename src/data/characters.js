

const characters = {
  frodo: {
    name: 'Frodo Baggins',
    profileImg: 'https://i.pinimg.com/originals/98/f3/09/98f309bd89d9ed8fe2133589012aa089.jpg',
    bannerImg: 'https://img1.10bestmedia.com/Images/Photos/345115/hobbiton-view-from-hobbit-hole_54_990x660.jpg',
    sections: {
      profile: {
        about: {
          asl: ['Male', 'Hobbit'],
          lastLogin: '09/22/2020',
        }
      },
      interests: 'Reading, Hanging out with Sam',
      blurbs: ['I currently live with my uncle Bilbo in Bag End.', 'I have a great task ahead of me.', 'I occasionally go by "Mr. Underhill."',],
      friends: ['boromir', 'gandalf', 'sam', 'merry', 'pippin', 'galadriel', 'smeagol', 'aragorn'],
      enemies: ['gollum', 'sarumon', 'sauron', 'witchKingOfAngmar', 'balrog', 'shelob', 'lurtz', 'smaug'],
    },
  },
  boromir: {
    name: 'Boromir',
    profileImg: 'https://i.pinimg.com/originals/0b/c4/98/0bc498e567b201de6e19a1df9cbd7269.jpg',
    bannerImg: 'https://www.lacasadeel.net/wp-content/uploads/2015/08/minas-tirith.jpg',
    sections: {
      profile: {
        about: {
          asl: ['Male', 'Human', 'The heir of Gondor'],
          lastLogin: '02/26/2021',
        }
      },
      interests: 'Leading my People, Deciphering Riddles, Fighting Orcs and Goblins, The One Ring ',
      blurbs: ['I know that one does not simply walk into Mordor. Its Black Gates are guarded by more than just Orcs.', 'None of us should wander alone.', 'Happy to lead.',],
      friends: ['pippin', 'galadriel', 'smeagol', 'aragorn', 'sam', 'merry', 'gandalf', 'frodo'],
      enemies: ['gollum', 'sarumon', 'witchKingOfAngmar', 'sauron', 'lurtz', 'smaug', 'balrog', 'shelob']
    },
  },
  gandalf: {
    name: 'Gandalf',
    profileImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Is8hWApw0JUgxYm3OZnJlVytrnCEFfW-Dg&usqp=CAU',
    bannerImg: "https://4kwallpaper.wiki/wp-content/uploads/2019/07/236484.jpg",
    sections: {
      profile: {
        about: {
          asl: ['Male', 'Wizard'],
          lastLogin: '02/14/2021',
        }
      },
      interests: 'Pointed Hats, Elves, Hobbits, Fireworks, Dragons, Stories',
      blurbs: ['You must understand that as a wizard, I am never late, nor early. I arrive precisely when I mean to.', 'I will never hesitate to step in and lead the troops to victory.', 'I once played a vital role in saving Middle-Earth from certain doom.',],
      friends: ['frodo', 'boromir', 'pippin', 'galadriel', 'smeagol', 'aragorn', 'sam', 'merry'],
      enemies: ['gollum', 'witchKingOfAngmar', 'sarumon', 'sauron', 'balrog', 'shelob', 'lurtz', 'smaug']
    },
  },
  sam: {
    name: 'Samwise Gamgee',
    profileImg: 'https://www.theonering.net/torwp/wp-content/uploads/2013/05/samwise-gamgee.jpg',
    bannerImg: 'https://i.pinimg.com/originals/28/4c/63/284c6354cb9305152c4ced335fe789da.jpg',
    sections: {
      profile: {
        about: {
          asl: ['Male', 'Hobbit'],
          lastLogin: '04/06/2021',
        }
      },
      interests: 'Simplicity, Rose, Taters, Gardening, Things Outside of the Shire ',
      blurbs: ['I love some well-done taters. Boil em, mash em, stick em in a stew...', 'Always happy to make new friends, but my heart belongs to a beauty by the name of Rose.', 'Devoutly loyal to my friends.',],
      friends: ['boromir', 'pippin', 'galadriel', 'merry', 'frodo', 'smeagol', 'aragorn', 'gandalf'],
      enemies: ['gollum', 'shelob', 'lurtz', 'smaug', 'sarumon', 'sauron', 'witchKingOfAngmar', 'balrog']

    },
  },
  merry: {
    name: 'Meriadoc Brandybuck',
    profileImg: 'https://i.pinimg.com/originals/20/1b/88/201b8814bc242568936940c34180eb6e.jpg',
    bannerImg: 'https://wallpaperaccess.com/full/815634.jpg',
    sections: {
      profile: {
        about: {
          asl: ['Male', 'Hobbit'],
          lastLogin: '03/19/2021',
        }
      },
      interests: 'Ent-draught, Writing, Maps, Ponies, Boats',
      blurbs: ['I love a good sense of humor and a splash of mischeviousness.', 'I am one of nine companions of the Fellowship of the Ring.', 'I love to eat, drink, and have fun.',],
      friends: ['pippin', 'galadriel', 'boromir', 'gandalf', 'frodo', 'smeagol', 'aragorn', 'sam'],
      enemies: ['gollum', 'sarumon', 'sauron', 'shelob', 'lurtz', 'smaug', 'witchKingOfAngmar', 'balrog']
    },
  },
  pippin: {
    name: 'Peregrin Took',
    profileImg: 'http://pm1.narvii.com/5773/465c361bbeb70445ca6086d73506f6d09dec4e4d_00.jpg',
    bannerImg: 'https://www.hobbitontours.com/media/1176/hobbiton-movie-set-3.jpg?anchor=center&mode=crop&width=1272&height=716&rnd=131194573340000000',
    sections: {
      profile: {
        about: {
          asl: ['Male', 'Hobbit'],
          lastLogin: '03/09/2021',
        }
      },
      interests: 'Singing, Pints, Second Breakfast, Tree Ents, Gondor',
      blurbs: ['I occasionaly like to take a walk to Farmer Maggot\'s Farm and help myself to a mushroom or two.', 'Did you know some pubs serve pints?', 'Always looking forward to spending time with friends, whether that is during second breakfast, elevenses, luncheon, afternoon tea, dinner, supper, etc.',],
      friends: ['merry', 'boromir', 'gandalf', 'galadriel', 'frodo', 'smeagol', 'aragorn', 'sam'],
      enemies: ['balrog', 'gollum', 'sarumon', 'sauron', 'witchKingOfAngmar', 'shelob', 'lurtz', 'smaug']
    },
  },
  smeagol: {
    name: 'Smeagol',
    profileImg: 'https://i0.wp.com/planetwaves.net/news/wp-content/uploads/2014/04/400+web-gollum.jpg?resize=402%2C336&ssl=1',
    bannerImg: 'https://wallpapercave.com/wp/tkkxYGd.jpg',
    sections: {
      profile: {
        about: {
          asl: ['Male', 'Stoor Hobbit'],
          lastLogin: '03/25/2021',
        }
      },
      interests: 'My precious...., Fish, Master',
      blurbs: ['The precious will be ours...', 'Smeagol wouldn\'t hurt a fly!', 'We will take you on a safe path through the mist. I found it, I did.',],
      friends: ['frodo', 'gollum'],
      enemies: ['merry', 'boromir', 'gandalf', 'galadriel', 'smeagol', 'aragorn', 'sam', 'pippin']
    },
  },
  gollum: {
    name: 'Gollum',
    profileImg: 'http://www.theargonath.cc/characters/gollum/soundstoppic.jpg',
    bannerImg: 'https://i.redd.it/jqen3tqybkv41.png',
    sections: {
      profile: {
        about: {
          asl: ['Male', 'Stoor Hobbit'],
          lastLogin: '03/25/2021',
        }
      },
      interests: 'We loves our Precious, we loves food, we hates stinky hobbitses, we don\'t know what taters are, precious...what\'ts taters?',
      blurbs: ['Gollum... Gollum... Gollum!', 'We forgot the taste of bread, the sound of wind in the trees... We even forgot our name...', 'Myyyy... Precious!',],
      friends: ['smeagol', 'shelob'],
      enemies: ['merry', 'boromir', 'gandalf', 'galadriel', 'frodo', 'pippin', 'aragorn', 'sam']
    },
  },
  sarumon: {
    name: 'Sarumon',
    profileImg: 'https://i.pinimg.com/originals/8c/23/15/8c2315941b5746e026fb580fd454a9f0.jpg',
    bannerImg: 'https://wallpaperaccess.com/full/3547540.jpg',
    sections: {
      profile: {
        about: {
          asl: ['Male', 'Wizard'],
          lastLogin: '11/03/2020',
        }
      },
      interests: 'Sauron\'s Power, Scheming, Knowledge, Order, Magic, Ancient Lore, Powerful Kingdoms, Using my Voice and Speech to Sway Others, Moving Quickly and Silently',
      blurbs: ['A new power is rising.', 'So you have chosen...me as your friend.', 'We must join Sauron. You can find him in my friends list.'],
      friends: ['shelob', 'balrog', 'witchKingOfAngmar', 'gollum', 'smaug', 'lurtz', 'sauron'],
      enemies: ['merry', 'boromir', 'gandalf', 'galadriel', 'frodo', 'pippin', 'aragorn', 'sam']
    },
  },
  sauron: {
    name: 'Sauron',
    profileImg: 'https://www.syfy.com/sites/syfy/files/styles/1200x680_hero/public/wire/legacy/sauroneye.png',
    bannerImg: 'https://wallpaperaccess.com/full/3076587.jpg',
    sections: {
      profile: {
        about: {
          asl: ['Immortal Spirit'],
          lastLogin: '03/25/2021',
        }
      },
      interests: 'Ruling all of Middle-Earth, ',
      blurbs: ['I see you.'],
      friends: ['sarumon', 'shelob', 'balrog', 'witchKingOfAngmar', 'gollum', 'smaug', 'lurtz'],
      enemies: ['merry', 'boromir', 'pippin', 'aragorn', 'sam', 'gandalf', 'galadriel', 'frodo']
    },
  },
  galadriel: {
    name: 'Galadriel',
    profileImg: 'https://www.cnet.com/a/img/ShQ_COVBmIwEkmtsfdr46dxMiYA=/940x0/2016/07/15/d070bb08-821e-4ad8-8f1b-77775ff4e6fb/galadrielhobbit.jpg',
    bannerImg: 'https://www.mdislander.com/wp-content/uploads/sites/5/2015/12/lothlorien-2.jpg',
    sections: {
      profile: {
        about: {
          asl: ['Female', 'Elf'],
          lastLogin: '09/29/2020',
        }
      },
      interests: 'Peering into the minds of others, Leading, The Light of Earendil',
      blurbs: ['Even the smallest person can change the course of the future.', 'The hearts of men are easily corrupted.', 'I am here to be your friend. You are not alone.'],
      friends: ['merry', 'boromir', 'gandalf', 'pippin', 'frodo', 'smeagol', 'aragorn', 'sam'],
      enemies: ['gollum', 'sarumon', 'sauron', 'witchKingOfAngmar', 'balrog', 'shelob', 'lurtz', 'smaug']
    },
  },
  aragorn: {
    name: 'Aragorn',
    profileImg: 'https://i.imgflip.com/4ab77i.jpg',
    bannerImg: 'https://networkinferno.net/wp-content/uploads/2018/11/lord-of-the-rings-landscape-wallpapers-1080p-For-Desktop-Wallpaper.jpg',
    sections: {
      profile: {
        about: {
          asl: ['Male', 'Human'],
          lastLogin: '03/01/2021',
        }
      },
      interests: 'Serving in the armies of kings, Raising morale, Disguise, Arwen, Friendship, Swords',
      blurbs: ['There is always hope.', 'My Hobbit friends bow to no one.', 'I do not fear death.'],
      friends: ['merry', 'boromir', 'gandalf', 'galadriel', 'frodo', 'Smeagol', 'pippin', 'sam'],
      enemies: ['gollum', 'sarumon', 'sauron', 'witchKingOfAngmar', 'balrog', 'shelob', 'lurtz', 'smaug']
    },
  },
  witchKingOfAngmar: {
    name: 'Witch-king of Angmar',
    profileImg: 'https://i.redd.it/rcg4yhsy6fp41.png',
    bannerImg: 'https://i.pinimg.com/originals/0a/07/0c/0a070cbaf3dc9b8b2e858af353675299.jpg',
    sections: {
      profile: {
        about: {
          asl: ['Ringwraith'],
          lastLogin: '03/15/2021',
        }
      },
      interests: 'Morgul-Knife, Sorcery, Leading the Nazgul',
      blurbs: ['I like to destroy kingdoms.', 'I fly on my pet Fellbeast.', 'No man can kill me.',],
      friends: ['sarumon', 'sauron', 'lurtz', 'balrog', 'shelob'],
      enemies: ['merry', 'boromir', 'gandalf', 'galadriel', 'pippin', 'aragorn', 'sam', 'frodo']
    },
  },
  balrog: {
    name: 'Durins Bane',
    profileImg: 'https://imgproxy.geocaching.com/3db67301eec2f80c6209abc978cb99703a4b8bbb?url=https%3A%2F%2Fd1u1p2xjjiahg3.cloudfront.net%2F6ffeab68-0b99-41b3-8160-c892c6c0669e_l.jpg',
    bannerImg: 'https://live.staticflickr.com/2399/2137563508_bba30c97b8_b.jpg',
    sections: {
      profile: {
        about: {
          asl: ['Balrog'],
          lastLogin: '02/14/2021',
        }
      },
      interests: 'Fire Whips, My Black Ax',
      blurbs: ['I am the greatest Balrog to ever walk Middle-Earth. You would be lucky to be friends with me.', '', 'asdasdas',],
      friends: ['sarumon', 'sauron', 'witchKingOfAngmar'],
      enemies: ['gandalf', 'merry', 'boromir', 'aragorn', 'sam', 'galadriel', 'pippin', 'frodo']
    },
  },
  shelob: {
    name: 'Shelob',
    profileImg: 'https://img2.looper.com/img/gallery/the-lord-of-the-rings-shelobs-backstory-explained/l-intro-1615400581.jpg',
    bannerImg: 'https://i2.wp.com/sitn.hms.harvard.edu/wp-content/uploads/2015/10/Elendil.jpg?resize=1920%2C768&ssl=1',
    sections: {
      profile: {
        about: {
          asl: ['Giant Spider'],
          lastLogin: '01/02/2021',
        }
      },
      interests: 'Drinking the Blood of Elves and Men, Weaving Webs, Darkness',
      blurbs: ['Always looking for a juicy morsel.'],
      friends: ['witchKingOfAngmar', 'sarumon', 'sauron', 'lurtz'],
      enemies: ['aragorn', 'sam', 'galadriel', 'pippin', 'frodo', 'gandalf', 'merry', 'boromir']
    },
  },
  lurtz: {
    name: 'Lurtz',
    profileImg: 'https://www.hobbydb.com/processed_uploads/subject_photo/subject_photo/image/34236/1512413057-12906-4397/MV5BYjFiZGFiNDItMDk2MS00ZDU3LTgzNjEtZjU0NGJiYjg4NzliXkEyXkFqcGdeQXVyMzQ3Nzk5MTU_._V1_SY1000_CR0_0_1330_1000_AL__large.jpg',
    bannerImg: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/289c97d5-963b-4772-b14b-9b4b3e112fe3/d1swb1l-de7c2fa1-7dc2-4cf2-a635-b9a5da154b13.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI4OWM5N2Q1LTk2M2ItNDc3Mi1iMTRiLTliNGIzZTExMmZlM1wvZDFzd2IxbC1kZTdjMmZhMS03ZGMyLTRjZjItYTYzNS1iOWE1ZGExNTRiMTMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.SKDaDRywYPT_6-0c8aNkrEaYkzLdW6DPxGbLsw5y_sg',
    sections: {
      profile: {
        about: {
          asl: ['Uruk-hai'],
          lastLogin: '04/29/2021',
        }
      },
      interests: 'Hunting, Taking Prisoners, Bow and Arrow',
      blurbs: ['I do not know pain.', 'I serve Sarumon'],
      friends: ['sarumon', 'sauron', 'shelob', 'witchKingOfAngmar'],
      enemies: ['frodo', 'aragorn', 'sam', 'gandalf', 'galadriel', 'boromir', 'pippin', 'merry',]
    },
  },
  smaug: {
    name: 'Smaug',
    profileImg: 'https://i.pinimg.com/originals/f6/fc/0c/f6fc0ce46fbf02bb420c3cbb422738ef.png',
    bannerImg: 'http://gorillafilmonline.com/wp-content/uploads/2014/12/Smaug-gold-horde.jpg',
    sections: {
      profile: {
        about: {
          asl: ['Dragon'],
          lastLogin: '11/16/2020',
        }
      },
      interests: 'Treasure, Mountains',
      blurbs: ['My teeth are swords, my claws spears, my wings a hurricane, and my breath, death!', 'I will shower you with gold.', 'asdasdas'],
      friends: ['sauron', 'sarumon', 'balrog'],
      enemies: ['frodo', 'gandalf', 'galadriel', 'aragorn', 'sam', 'pippin', 'merry', 'boromir']
    },
  },
}

export default characters