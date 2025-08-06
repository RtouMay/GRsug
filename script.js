document.addEventListener('DOMContentLoaded', () => {
    // Game data from gamerenter.ir
    const gameData = [
        { 
            title: "EA SPORTS FC 25", 
            genre: "ورزشی", 
            price: 179000, 
            metascore: 83, 
            image: "https://via.placeholder.com/200/ff3333/1c1c1c?text=EAFC+25", 
            summary: "جدیدترین نسخه بازی محبوب فوتبال، تجربه‌ای بی‌نظیر از رقابت‌های ورزشی را ارائه می‌دهد. گرافیک واقع‌گرایانه و گیم‌پلی روان، این بازی را به انتخابی عالی برای دوستداران فوتبال تبدیل کرده است.", 
            duration: "۵۰+ ساعت",
            link: "https://gamerenter.ir/product/ea-sports-fc-25-xbox-dig",
            size: {
                ps5: "۱۵۰ گیگابایت",
                xbox: "۱۴۰ گیگابایت",
                pc: "۱۵۵ گیگابایت"
            }
        },
        { 
            title: "Red Dead Redemption 2", 
            genre: "اکشن", 
            price: 69000, 
            metascore: 97, 
            image: "https://via.placeholder.com/200/ff3333/1c1c1c?text=RDR2", 
            summary: "سفری حماسی به غرب وحشی آمریکا. در نقش آرتور مورگان، یک گانگستر با وجدان، در دنیایی پر از هرج و مرج به دنبال بقا باشید. داستان عمیق، شخصیت‌های فراموش‌نشدنی و جزئیات حیرت‌انگیز، این بازی را به یک شاهکار تبدیل کرده است.", 
            duration: "۱۰۰+ ساعت",
            link: "https://gamerenter.ir/product/red-dead-redemption-2-xbox-dig",
            size: {
                ps5: "۱۵۰ گیگابایت",
                xbox: "۱۴۰ گیگابایت",
                pc: "۱۵۵ گیگابایت"
            }
        },
        { 
            title: "GTA V", 
            genre: "اکشن", 
            price: 69000, 
            metascore: 97, 
            image: "https://via.placeholder.com/200/ff3333/1c1c1c?text=GTA+V", 
            summary: "در یک دنیای باز و پر از آزادی، هرج و مرج را تجربه کنید. با سه شخصیت اصلی، درگیر داستان جنایی و پر از طنز لوس سانتوس شوید. هرگز در این بازی خسته نخواهید شد!", 
            duration: "۷۰+ ساعت",
            link: "https://gamerenter.ir/product/gta-v-xbox-dig",
            size: {
                ps5: "۱۵۰ گیگابایت",
                xbox: "۱۴۰ گیگابایت",
                pc: "۱۵۵ گیگابایت"
            }
        },
        { 
            title: "The Witcher 3: Wild Hunt", 
            genre: "نقش آفرینی", 
            price: 79000, 
            metascore: 93, 
            image: "https://via.placeholder.com/200/ff3333/1c1c1c?text=The+Witcher+3", 
            summary: "یک داستان حماسی در دنیای فانتزی را تجربه کنید. در نقش گرالت، یک ویچر حرفه‌ای، به دنبال سیری، دختر خوانده‌تان بگردید. انتخاب‌های شما سرنوشت جهان را تغییر می‌دهد.", 
            duration: "۱۵۰+ ساعت",
            link: "https://gamerenter.ir/product/the-witcher-3-wild-hunt-xbox-dig",
            size: {
                ps5: "۱۵۰ گیگابایت",
                xbox: "۱۴۰ گیگابایت",
                pc: "۱۵۵ گیگابایت"
            }
        },
        { 
            title: "Hogwarts Legacy", 
            genre: "ماجراجویی", 
            price: 399000, 
            metascore: 84, 
            image: "https://via.placeholder.com/200/ff3333/1c1c1c?text=Hogwarts+Legacy", 
            summary: "وارد دنیای جادوگری هاگوارتز شوید و داستان خود را خلق کنید. ماجراجویی‌های مرموز، مبارزه با موجودات جادویی و کشف رازهای پنهان در انتظار شماست.", 
            duration: "۸۰+ ساعت",
            link: "https://gamerenter.ir/product/hogwarts-legacy-xbox-dig",
            size: {
                ps5: "۱۵۰ گیگابایت",
                xbox: "۱۴۰ گیگابایت",
                pc: "۱۵۵ گیگابایت"
            }
        },
        { 
            title: "Star Wars Outlaws", 
            genre: "اکشن", 
            price: 1200000, 
            metascore: 85, 
            image: "https://via.placeholder.com/200/ff3333/1c1c1c?text=Star+Wars", 
            summary: "در این بازی اکشن جهان‌باز، در نقش یک یاغی فضایی، در کهکشان جنگ ستارگان به دنبال آزادی و ماجراجویی باشید. دزدی، فرار و مبارزه با امپراطوری تنها بخشی از کارهای شماست.", 
            duration: "۴۰+ ساعت",
            link: "https://gamerenter.ir/product/star-wars-outlaws-xbox-dig",
            size: {
                ps5: "۱۵۰ گیگابایت",
                xbox: "۱۴۰ گیگابایت",
                pc: "۱۵۵ گیگابایت"
            }
        },
        { 
            title: "Far Cry 5", 
            genre: "شوتر", 
            price: 79000, 
            metascore: 81, 
            image: "https://via.placeholder.com/200/ff3333/1c1c1c?text=Far+Cry+5", 
            summary: "درگیر نبرد با یک فرقه مذهبی خطرناک در ایالت مونتانا شوید. این بازی شوتر اول‌شخص با داستان پرکشش و جهان‌باز بزرگ، شما را ساعت‌ها سرگرم خواهد کرد.", 
            duration: "۵۰+ ساعت",
            link: "https://gamerenter.ir/product/far-cry-5-xbox-dig",
            size: {
                ps5: "۱۵۰ گیگابایت",
                xbox: "۱۴۰ گیگابایت",
                pc: "۱۵۵ گیگابایت"
            }
        },
        { 
            title: "WWE 2K25", 
            genre: "ورزشی", 
            price: 299000, 
            metascore: 78, 
            image: "https://via.placeholder.com/200/ff3333/1c1c1c?text=WWE+2K25", 
            summary: "جدیدترین نسخه از سری بازی‌های کشتی کج. تمام ستارگان مورد علاقه شما در یک بازی با گرافیک خیره‌کننده و گیم‌پلی عالی جمع شده‌اند.", 
            duration: "۲۵+ ساعت",
            link: "https://gamerenter.ir/product/wwe-2k25-xbox-dig",
            size: {
                ps5: "۱۵۰ گیگابایت",
                xbox: "۱۴۰ گیگابایت",
                pc: "۱۵۵ گیگابایت"
            }
        },
        { 
            title: "NBA 2K25", 
            genre: "ورزشی", 
            price: 299000, 
            metascore: 79, 
            image: "https://via.placeholder.com/200/ff3333/1c1c1c?text=NBA+2K25", 
            summary: "تجربه واقعی بسکتبال را با بهترین بازیکنان NBA تجربه کنید. با دوستانتان رقابت کنید یا تیم رویایی خود را بسازید.", 
            duration: "۳۰+ ساعت",
            link: "https://gamerenter.ir/product/nba-2k25-xbox-dig",
            size: {
                ps5: "۱۵۰ گیگابایت",
                xbox: "۱۴۰ گیگابایت",
                pc: "۱۵۵ گیگابایت"
            }
        },
        { 
            title: "Borderlands 4", 
            genre: "شوتر", 
            price: 1112000, 
            metascore: 88, 
            image: "https://via.placeholder.com/200/ff3333/1c1c1c?text=Borderlands+4", 
            summary: "بازی شوتر لوتری با سبک هنری کارتونی و طنز منحصر به فرد. در دنیایی دیوانه‌وار به دنبال گنج‌های پنهان بگردید.", 
            duration: "۶۰+ ساعت",
            link: "https://gamerenter.ir/product/borderlands-4-xbox-dig",
            size: {
                ps5: "۱۵۰ گیگابایت",
                xbox: "۱۴۰ گیگابایت",
                pc: "۱۵۵ گیگابایت"
            }
        },
        { 
            title: "Little Nightmares III", 
            genre: "ترس و بقا", 
            price: 1200000, 
            metascore: 82, 
            image: "https://via.placeholder.com/200/ff3333/1c1c1c?text=Little+Nightmares", 
            summary: "یک بازی پازل-پلتفرمر ترسناک با اتمسفری منحصر به فرد. در دنیایی کابوس‌وار، به دنبال راه فرار باشید و از موجودات عجیب پنهان شوید.", 
            duration: "۱۰+ ساعت",
            link: "https://gamerenter.ir/product/little-nightmares-3-xbox-dig",
            size: {
                ps5: "۱۵۰ گیگابایت",
                xbox: "۱۴۰ گیگابایت",
                pc: "۱۵۵ گیگابایت"
            }
        },
        { 
            title: "The Last of Us Part I", 
            genre: "ترس و بقا", 
            price: 349000, 
            metascore: 88, 
            image: "https://via.placeholder.com/200/ff3333/1c1c1c?text=The+Last+of+Us", 
            summary: "داستان عمیق و احساسی در دنیایی پسا-آخرالزمانی. با جوئل و الی همراه شوید و برای بقا در برابر موجودات آلوده بجنگید.", 
            duration: "۲۰+ ساعت",
            link: "https://gamerenter.ir/product/the-last-of-us-part-i-xbox-dig",
            size: {
                ps5: "۱۵۰ گیگابایت",
                xbox: "۱۴۰ گیگابایت",
                pc: "۱۵۵ گیگابایت"
            }
        },
        { 
            title: "Elden Ring", 
            genre: "نقش آفرینی", 
            price: 1500000, 
            metascore: 96, 
            image: "https://via.placeholder.com/200/ff3333/1c1c1c?text=Elden+Ring", 
            summary: "یک بازی نقش‌آفرینی جهان‌باز با نبردهای چالش‌برانگیز و دنیایی پر رمز و راز. یکی از بهترین بازی‌های تاریخ با امتیاز متاکریتیک بالا.", 
            duration: "۱۰۰+ ساعت",
            link: "https://gamerenter.ir/product/elden-ring-xbox-dig",
            size: {
                ps5: "۱۵۰ گیگابایت",
                xbox: "۱۴۰ گیگابایت",
                pc: "۱۵۵ گیگابایت"
            }
        },
        { 
            title: "Hitman 3", 
            genre: "اکشن", 
            price: 1200000, 
            metascore: 87, 
            image: "https://via.placeholder.com/200/ff3333/1c1c1c?text=Hitman+3", 
            summary: "در نقش مامور ۴۷، در محیط‌های مختلف به ماموریت‌های ترور بروید. این بازی مخفی‌کاری، آزادی عمل زیادی به شما می‌دهد.", 
            duration: "۳۰+ ساعت",
            link: "https://gamerenter.ir/product/hitman-3-xbox-dig",
            size: {
                ps5: "۱۵۰ گیگابایت",
                xbox: "۱۴۰ گیگابایت",
                pc: "۱۵۵ گیگابایت"
            }
        },
        { 
            title: "Lies of P", 
            genre: "نقش آفرینی", 
            price: 1300000, 
            metascore: 80, 
            image: "https://via.placeholder.com/200/ff3333/1c1c1c?text=Lies+of+P", 
            summary: "بازی سولزلایک (Soulslike) الهام گرفته از داستان پینوکیو. در شهری تاریک و گوتیک با ربات‌های عجیب بجنگید و حقیقت را کشف کنید.", 
            duration: "۴۰+ ساعت",
            link: "https://gamerenter.ir/product/lies-of-p-xbox-dig",
            size: {
                ps5: "۱۵۰ گیگابایت",
                xbox: "۱۴۰ گیگابایت",
                pc: "۱۵۵ گیگابایت"
            }
        },
        { 
            title: "FIFA 24", 
            genre: "ورزشی", 
            price: 800000, 
            metascore: 80, 
            image: "https://via.placeholder.com/200/ff3333/1c1c1c?text=FIFA+24", 
            summary: "نسخه جدید از سری بازی‌های فیفا. گرافیک بهبود یافته، تیم‌ها و بازیکنان جدید و گیم‌پلی جذاب‌تر.", 
            duration: "۵۰+ ساعت",
            link: "https://gamerenter.ir/fifa-24",
            size: {
                ps5: "۱۵۰ گیگابایت",
                xbox: "۱۴۰ گیگابایت",
                pc: "۱۵۵ گیگابایت"
            }
        }
    ];
    
    // Elements from the DOM
    const genreCards = document.querySelectorAll('.genre-card');
    const priceRangeSlider = document.getElementById('price-range-slider');
    const priceDisplay = document.getElementById('price-display');
    const recommendButton = document.getElementById('recommend-button');
    const recommendationResults = document.getElementById('recommendation-results');
    const gameList = document.getElementById('game-list');
    const resetButton = document.getElementById('reset-button');
    const popup = document.getElementById('game-info-popup');
    const closePopupButton = document.getElementById('close-popup');
    const shareButton = document.getElementById('share-button');
    const favoritesButton = document.getElementById('add-to-favorites-button');

    // State variables
    let selectedGenres = [];

    // Function to convert English/Arabic numbers to Farsi
    function toFarsi(number) {
        const farsi = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        return number.toString().replace(/\d/g, d => farsi[d]);
    }
    
    // Function to get Metacritic score color class
    function getMetascoreColorClass(score) {
        if (score >= 75) return 'green';
        if (score >= 50) return 'yellow';
        return 'red';
    }

    // Event listener for genre cards (multi-select)
    genreCards.forEach(card => {
        card.addEventListener('click', (event) => {
            if (event.ctrlKey || event.metaKey) {
                card.classList.toggle('selected');
            } else {
                genreCards.forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
            }
            selectedGenres = Array.from(document.querySelectorAll('.genre-card.selected')).map(c => c.dataset.genre);
        });
    });

    // Event listener for price slider
    priceRangeSlider.addEventListener('input', () => {
        const price = priceRangeSlider.value;
        priceDisplay.textContent = `تا ${toFarsi(new Intl.NumberFormat('fa-IR').format(price))} تومان`;
    });

    function filterGames() {
        const maxPrice = priceRangeSlider.value;
        const filteredGames = gameData.filter(game => {
            const genreMatch = selectedGenres.length === 0 || selectedGenres.includes(game.genre);
            const priceMatch = game.price <= maxPrice;
            return genreMatch && priceMatch;
        });
        displayGames(filteredGames);
    }
    
    function displayGames(games) {
        gameList.innerHTML = '';
        if (games.length > 0) {
            games.forEach(game => {
                const gameCard = document.createElement('div');
                gameCard.className = 'game-card';
                gameCard.innerHTML = `
                    <img src="${game.image}" alt="${game.title}">
                    <div class="metacritic-score ${getMetascoreColorClass(game.metascore)}">
                        <span class="score-value">${toFarsi(game.metascore)}</span>
                    </div>
                    <div class="game-card-content">
                        <h4>${game.title}</h4>
                        <p>${toFarsi(new Intl.NumberFormat('fa-IR').format(game.price))} تومان</p>
                    </div>
                `;
                gameCard.addEventListener('click', () => {
                    showGameInfoPopup(game);
                });
                gameList.appendChild(gameCard);
            });
        } else {
            gameList.innerHTML = '<p class="no-results">متاسفانه بازی با این مشخصات پیدا نشد.</p>';
        }
        recommendationResults.style.display = 'block';
    }

    function showGameInfoPopup(game) {
        document.getElementById('popup-image').src = game.image;
        document.getElementById('popup-image').alt = game.title;
        document.getElementById('popup-metascore-badge').className = `metacritic-score ${getMetascoreColorClass(game.metascore)}`;
        document.querySelector('#popup-metascore-badge .score-value').textContent = toFarsi(game.metascore);
        document.getElementById('popup-title').textContent = game.title;
        document.getElementById('popup-summary').textContent = game.summary;
        document.getElementById('popup-duration').textContent = `⏰ مدت زمان تقریبی بازی: ${toFarsi(game.duration)}`;
        document.getElementById('popup-size').textContent = `💾 حجم تقریبی بازی (PC): ${toFarsi(game.size.pc)}`;
        document.getElementById('popup-link').href = game.link;
        popup.style.display = 'flex';
    }

    closePopupButton.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    favoritesButton.addEventListener('click', () => {
        alert("این قابلیت در نسخه کامل سایت گیم رنتر فعال است!");
    });

    shareButton.addEventListener('click', () => {
        const link = document.getElementById('popup-link').href;
        navigator.clipboard.writeText(link)
            .then(() => alert("لینک بازی با موفقیت کپی شد!"))
            .catch(err => console.error('Failed to copy: ', err));
    });
    
    function resetForm() {
        genreCards.forEach(c => c.classList.remove('selected'));
        selectedGenres = [];
        priceRangeSlider.value = priceRangeSlider.max;
        priceDisplay.textContent = `تا ${toFarsi(new Intl.NumberFormat('fa-IR').format(priceRangeSlider.max))} تومان`;
        recommendationResults.style.display = 'none';
        gameList.innerHTML = '';
    }

    recommendButton.addEventListener('click', filterGames);
    resetButton.addEventListener('click', resetForm);

    resetForm();
});
