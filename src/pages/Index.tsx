import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const KittenCarousel = () => {
  const images = [
    'https://cdn.poehali.dev/files/e463672c-4d2c-47a6-ab7c-0f3df42b0f27.jpg',
    'https://cdn.poehali.dev/files/7a169590-cc23-477f-93cc-8b2a5b3aa12f.jpg',
    'https://cdn.poehali.dev/files/7f1a2746-6714-4894-8d82-60e98781e427.jpg',
    'https://cdn.poehali.dev/files/0542672e-973f-4263-8908-a3554e187290.jpg',
    'https://cdn.poehali.dev/files/196bd47f-fec9-4772-88cb-7467c784147b.jpg'
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };
  
  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  
  return (
    <div className="relative group">
      <img 
        src={images[currentIndex]}
        alt={`Голубой котик ${currentIndex + 1}`}
        className="w-full h-auto object-contain"
      />
      
      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Предыдущее фото"
      >
        <Icon name="ChevronLeft" size={24} />
      </button>
      
      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Следующее фото"
      >
        <Icon name="ChevronRight" size={24} />
      </button>
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-white w-6' : 'bg-white/50'
            }`}
            aria-label={`Перейти к фото ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-primary">БриМурр</h1>
            
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={28} />
            </button>
            
            <div className="hidden md:flex gap-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Главная
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-primary transition-colors"
              >
                О питомнике
              </button>
              <button 
                onClick={() => scrollToSection('kittens')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Свободные котята
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Галерея
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Контакты
              </button>
            </div>
          </div>
          
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 animate-fade-in">
              <div className="flex flex-col gap-4">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-left text-foreground hover:text-primary transition-colors py-2 border-b border-border"
                >
                  Главная
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-left text-foreground hover:text-primary transition-colors py-2 border-b border-border"
                >
                  О нас
                </button>
                <button 
                  onClick={() => scrollToSection('kittens')}
                  className="text-left text-foreground hover:text-primary transition-colors py-2 border-b border-border"
                >
                  Свободные котята
                </button>
                <button 
                  onClick={() => scrollToSection('gallery')}
                  className="text-left text-foreground hover:text-primary transition-colors py-2 border-b border-border"
                >
                  Галерея
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-left text-foreground hover:text-primary transition-colors py-2 border-b border-border"
                >
                  Контакты
                </button>
                <a 
                  href="https://t.me/brimurr" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-left text-foreground hover:text-primary transition-colors py-3 bg-accent/10 px-4 rounded-lg"
                >
                  <Icon name="Send" size={20} className="text-accent" />
                  <span className="font-semibold">Написать в Telegram</span>
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      <section id="home" className="pt-32 pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl sm:text-6xl font-bold text-primary mb-6">Домашний питомник британских кошек в Москве</h2>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">Вы явно заглянули сюда в поисках нового друга! Мы на 99% уверены, что Ваше сердце будет украдено именно нашим котёнком. Знакомьтесь с нами на сайте и в Telegram, влюбляйтесь и приходите забирать счастье в свой дом!</p>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg"
              >
                Связаться с нами
              </Button>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/files/8dfc97b0-6eb6-4019-b6fc-90aba262b716.jpg"
                alt="Британский кот"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 sm:px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-primary mb-16">О нас</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="grid grid-cols-3 gap-2 p-4">
                <img 
                  src="https://cdn.poehali.dev/files/f79a51c0-e5ac-4a57-91f6-9956c8d65713.jpg"
                  alt="Забота о котятах 1"
                  className="w-full h-48 object-cover cursor-pointer hover:opacity-80 transition-opacity rounded"
                  onClick={() => setSelectedImage('https://cdn.poehali.dev/files/f79a51c0-e5ac-4a57-91f6-9956c8d65713.jpg')}
                />
                <img 
                  src="https://cdn.poehali.dev/files/2878a398-cfd7-4349-9218-6888cde0bc6e.jpg"
                  alt="Забота о котятах 2"
                  className="w-full h-48 object-cover cursor-pointer hover:opacity-80 transition-opacity rounded"
                  onClick={() => setSelectedImage('https://cdn.poehali.dev/files/2878a398-cfd7-4349-9218-6888cde0bc6e.jpg')}
                />
                <img 
                  src="https://cdn.poehali.dev/files/7744596d-6474-4093-a4f0-d77ce00f2a1a.jpg"
                  alt="Забота о котятах 3"
                  className="w-full h-48 object-cover cursor-pointer hover:opacity-80 transition-opacity rounded"
                  onClick={() => setSelectedImage('https://cdn.poehali.dev/files/7744596d-6474-4093-a4f0-d77ce00f2a1a.jpg')}
                />
              </div>
              <CardContent className="p-6 sm:p-8">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Heart" size={32} className="text-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Забота</h3>
                <div className="text-muted-foreground text-left space-y-3 sm:space-y-4">
                  <p>Мы заботимся о своих питомцах, поэтому в квартире создано всё для их комфортного и безопасного проживания.</p>
                  
                  <p>Для кошек обустроена отдельная комната. В комнате установлены:</p>
                  
                  <p>— автоматические лотки Реtkit Рurаmах2 (два в их комнате, а всего квартире три), что даёт возможность кошкам воспользоваться чистым лотком в любое время суток;</p>
                  
                  <p>— рекуператоры Fuji Funаi 150 (один в их комнате, всего в квартире два), которые подают в комнату свежий фильтрованный воздух без сквозняков, что особенно важно зимой;</p>
                  
                  <p>— на всех 4х окнах в квартире установлены сетки-антикошки;</p>
                  
                  <p>— установлена камера видеонаблюдения, которая позволяет наблюдать за животными даже вне дома;</p>
                  
                  <p>— для физической активности установлен комплекс с когтеточками и настенным столбиком;</p>
                  
                  <p>— стены в комнате обшиты гипсовым кирпичом, так как котята, как и маленькие дети, тянут всё в рот, включая обои.</p>
                  
                  <p>— ну и немного милоты: картины с изображением британских котиков нам написала художник из Санкт-Петербурга. Её <a href="https://www.avito.ru/brands/33b5060dfb8ca8d74e439fe600057b91/items/all?sellerId=62ee7bebe98369737342681e5f145a3d&s=search_page_share" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">профиль на Авито</a>.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 sm:p-8">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="FileText" size={32} className="text-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-center">Правила посещения</h3>
                <div className="text-muted-foreground text-left space-y-4">
                  <p className="font-semibold">Уважаемый покупатель!</p>
                  
                  <p>Мы дорожим здоровьем наших питомцев, поэтому просим Вас перед посещением нашего дома ознакомиться со следующей информацией:</p>
                  
                  <p>— Перед входом в квартиру наденьте, пожалуйста, бахилы и обработайте руки спиртовыми салфетками (эти расходники мы Вам предоставим). Данная мера необходима, так как в нашем доме почти всегда есть маленькие котята и/или беременные кошки, а вирусы можно принести на обуви или на руках;</p>
                  
                  <p>— Мы очень просим не гладить наших животных. Так как Вы находитесь в поиске нового питомца, мы не можем быть уверены, что Вы не посещали до нас другие питомники, откуда можно принести различные вирусные/инфекционные заболевания;</p>
                  
                  <p>— Не берите котят на руки. Они Вас не знают, и это может их напугать. Мы уже столкнулись однажды с ситуацией, когда мужчина, подняв котёнка на руки, уронил его с высоты своего роста об ламинат. Стресс и у нас, и у котёнка. Если Вы хотите рассмотреть понравившегося малыша, мы сами поднимем его и покажем поближе;</p>
                  
                  <p>— Внимательно смотрите под ноги, наши кошки любопытные и будут крутиться вокруг Вас, поэтому есть риск на них наступить;</p>
                  
                  <p>— Вас будут встречать только те кошки, которые сами захотели выйти. В нашем доме в общей сложности проживает 9 взрослых животных. У каждого свои привычки и свой ритм жизни. Частые приходы людей могут нарушать их покой. Мы не хотим заставлять их жить по принципу контактного зоопарка.</p>
                  
                  <p>Просим с пониманием отнестись к данным требованиям. Ведь это и Ваша уверенность в том, что Вы приобрели здорового котёнка.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="kittens" className="py-20 px-4 sm:px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-primary mb-8">Свободные котята</h2>
          <div className="mx-auto text-center mb-12 px-2">
            <p className="text-base sm:text-lg text-muted-foreground mb-6">
              Фотографии котят могли уже устареть. За дополнительными фото и видео обращайтесь к нам
            </p>
            <div className="flex gap-3 justify-center">
              <a 
                href="https://t.me/brimur" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full transition-all hover:scale-110 shadow-md"
                title="Telegram"
              >
                <Icon name="Send" size={20} />
              </a>
              <a 
                href="https://wa.me/79164402501" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-green-600 hover:bg-green-700 text-white rounded-full transition-all hover:scale-110 shadow-md"
                title="WhatsApp"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-2xl transition-shadow duration-300 border-4 border-yellow-500 relative">
              <div className="absolute top-4 right-4 bg-yellow-500 text-white px-4 py-2 rounded-full font-bold shadow-lg z-10">
                Зарезервирован
              </div>
              <img 
                src="https://cdn.poehali.dev/files/95e0efc7-d4f2-41e1-ad6d-558c38bbbcde.jpg"
                alt="Лиловый котик"
                className="w-full h-auto object-contain"
              />
              <CardContent className="p-6">
                <div className="space-y-2 text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Icon name="Calendar" size={18} className="text-accent" />
                    <span>Дата рождения: 24 сентября 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Palette" size={18} className="text-accent" />
                    <span>Окрас: лиловый</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Sparkles" size={18} className="text-accent" />
                    <span>Пол: котик</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Scissors" size={18} className="text-accent" />
                    <span>Короткошёрстный</span>
                  </div>
                </div>
                <div className="text-center mb-4">
                  <p className="text-3xl font-bold text-accent">60 000 ₽</p>
                </div>
                <div className="flex gap-3 justify-center">
                  <a
                    href="https://t.me/brimur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full transition-all hover:scale-110 shadow-md"
                    title="Telegram"
                  >
                    <Icon name="Send" size={20} />
                  </a>
                  <a
                    href="https://wa.me/79164402501"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-green-600 hover:bg-green-700 text-white rounded-full transition-all hover:scale-110 shadow-md"
                    title="WhatsApp"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-2xl transition-shadow duration-300 border-4 border-yellow-500 relative">
              <div className="absolute top-4 right-4 bg-yellow-500 text-white px-4 py-2 rounded-full font-bold shadow-lg z-10">
                Зарезервирован
              </div>
              <img 
                src="https://cdn.poehali.dev/files/8570490e-71d6-4758-9ae4-631f0871395c.jpg"
                alt="Лиловый котик"
                className="w-full h-auto object-contain"
              />
              <CardContent className="p-6">
                <div className="space-y-2 text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Icon name="Calendar" size={18} className="text-accent" />
                    <span>Дата рождения: 24 сентября 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Palette" size={18} className="text-accent" />
                    <span>Окрас: лиловый</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Sparkles" size={18} className="text-accent" />
                    <span>Пол: котик</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Scissors" size={18} className="text-accent" />
                    <span>Длинношёрстный</span>
                  </div>
                </div>
                <div className="text-center mb-4">
                  <p className="text-3xl font-bold text-accent">100 000 ₽</p>
                </div>
                <div className="flex gap-3 justify-center">
                  <a
                    href="https://t.me/brimur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full transition-all hover:scale-110 shadow-md"
                    title="Telegram"
                  >
                    <Icon name="Send" size={20} />
                  </a>
                  <a
                    href="https://wa.me/79164402501"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-green-600 hover:bg-green-700 text-white rounded-full transition-all hover:scale-110 shadow-md"
                    title="WhatsApp"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-2xl transition-shadow duration-300 border-4 border-yellow-500 relative">
              <div className="absolute top-4 right-4 bg-yellow-500 text-white px-4 py-2 rounded-full font-bold shadow-lg z-10">
                Зарезервирована
              </div>
              <KittenCarousel />
              <CardContent className="p-6">
                <div className="space-y-2 text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Icon name="Calendar" size={18} className="text-accent" />
                    <span>Дата рождения: 24 сентября 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Palette" size={18} className="text-accent" />
                    <span>Окрас: лиловый</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Sparkles" size={18} className="text-accent" />
                    <span>Пол: кошечка</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Scissors" size={18} className="text-accent" />
                    <span>Короткошёрстная</span>
                  </div>
                </div>
                <div className="text-center mb-4">
                  <p className="text-3xl font-bold text-accent">60 000 ₽</p>
                </div>
                <div className="flex gap-3 justify-center">
                  <a
                    href="https://t.me/brimur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full transition-all hover:scale-110 shadow-md"
                    title="Telegram"
                  >
                    <Icon name="Send" size={20} />
                  </a>
                  <a
                    href="https://wa.me/79164402501"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-green-600 hover:bg-green-700 text-white rounded-full transition-all hover:scale-110 shadow-md"
                    title="WhatsApp"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <img 
                src="https://cdn.poehali.dev/files/0d0082ae-e9e8-4ea4-a981-fa3202dc84e0.jpg"
                alt="Голубая кошечка"
                className="w-full h-auto object-contain"
              />
              <CardContent className="p-6">
                <div className="space-y-2 text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Icon name="Calendar" size={18} className="text-accent" />
                    <span>Дата рождения: 24 сентября 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Palette" size={18} className="text-accent" />
                    <span>Окрас: голубой</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Sparkles" size={18} className="text-accent" />
                    <span>Пол: кошечка</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Scissors" size={18} className="text-accent" />
                    <span>Длинношёрстная</span>
                  </div>
                </div>
                <div className="text-center mb-4">
                  <p className="text-3xl font-bold text-accent">100 000 ₽</p>
                </div>
                <div className="flex gap-3 justify-center">
                  <a
                    href="https://t.me/brimur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full transition-all hover:scale-110 shadow-md"
                    title="Telegram"
                  >
                    <Icon name="Send" size={20} />
                  </a>
                  <a
                    href="https://wa.me/79164402501"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-green-600 hover:bg-green-700 text-white rounded-full transition-all hover:scale-110 shadow-md"
                    title="WhatsApp"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-2xl transition-shadow duration-300 border-4 border-yellow-500 relative">
              <div className="absolute top-4 right-4 bg-yellow-500 text-white px-4 py-2 rounded-full font-bold shadow-lg z-10">
                Зарезервирован
              </div>
              <img 
                src="https://cdn.poehali.dev/files/eb17dff2-ae47-42b2-8136-7da5c07e7867.jpg"
                alt="Голубой котик"
                className="w-full h-auto object-contain"
              />
              <CardContent className="p-6">
                <div className="space-y-2 text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Icon name="Calendar" size={18} className="text-accent" />
                    <span>Дата рождения: 15 сентября 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Palette" size={18} className="text-accent" />                    <span>Окрас: голубой</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Sparkles" size={18} className="text-accent" />
                    <span>Пол: котик</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Scissors" size={18} className="text-accent" />
                    <span>Короткошёрстный</span>
                  </div>
                </div>
                <div className="text-center mb-4">
                  <p className="text-3xl font-bold text-accent">70 000 ₽</p>
                </div>
                <div className="flex gap-3 justify-center">
                  <a
                    href="https://t.me/brimur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full transition-all hover:scale-110 shadow-md"
                    title="Telegram"
                  >
                    <Icon name="Send" size={20} />
                  </a>
                  <a
                    href="https://wa.me/79164402501"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-green-600 hover:bg-green-700 text-white rounded-full transition-all hover:scale-110 shadow-md"
                    title="WhatsApp"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <img 
                src="https://cdn.poehali.dev/files/b0175a6e-5d21-4136-9c26-d3a3affe6adb.jpg"
                alt="Голубой котик"
                className="w-full h-auto object-contain"
              />
              <CardContent className="p-6">
                <div className="space-y-2 text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Icon name="Calendar" size={18} className="text-accent" />
                    <span>Дата рождения: 27 июня 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Palette" size={18} className="text-accent" />
                    <span>Окрас: голубой</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Sparkles" size={18} className="text-accent" />
                    <span>Пол: котик</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Scissors" size={18} className="text-accent" />
                    <span>Короткошёрстный</span>
                  </div>
                </div>
                <div className="text-center mb-4">
                  <p className="text-3xl font-bold text-accent">40 000 ₽</p>
                </div>
                <div className="flex gap-3 justify-center">
                  <a
                    href="https://t.me/brimur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full transition-all hover:scale-110 shadow-md"
                    title="Telegram"
                  >
                    <Icon name="Send" size={20} />
                  </a>
                  <a
                    href="https://wa.me/79164402501"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-green-600 hover:bg-green-700 text-white rounded-full transition-all hover:scale-110 shadow-md"
                    title="WhatsApp"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <img 
                src="https://cdn.poehali.dev/files/c6c86712-b576-4d83-9f3a-d4c51123b869.jpg"
                alt="Голубая кошечка"
                className="w-full h-auto object-contain"
              />
              <CardContent className="p-6">
                <div className="space-y-2 text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Icon name="Calendar" size={18} className="text-accent" />
                    <span>Дата рождения: 27 июня 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Palette" size={18} className="text-accent" />
                    <span>Окрас: голубой</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Sparkles" size={18} className="text-accent" />
                    <span>Пол: кошечка</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Scissors" size={18} className="text-accent" />
                    <span>Короткошёрстная</span>
                  </div>
                </div>
                <div className="text-center mb-4">
                  <p className="text-3xl font-bold text-accent">20 000 ₽</p>
                </div>
                <div className="flex gap-3 justify-center">
                  <a
                    href="https://t.me/brimur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full transition-all hover:scale-110 shadow-md"
                    title="Telegram"
                  >
                    <Icon name="Send" size={20} />
                  </a>
                  <a
                    href="https://wa.me/79164402501"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-green-600 hover:bg-green-700 text-white rounded-full transition-all hover:scale-110 shadow-md"
                    title="WhatsApp"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <img 
                src="https://cdn.poehali.dev/files/35eb5942-c82e-49a1-a737-ff746ff441de.jpg"
                alt="Голубая кошечка"
                className="w-full h-auto object-contain"
              />
              <CardContent className="p-6">
                <div className="space-y-2 text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Icon name="Calendar" size={18} className="text-accent" />
                    <span>Дата рождения: 12 апреля 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Palette" size={18} className="text-accent" />
                    <span>Окрас: голубой</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Sparkles" size={18} className="text-accent" />
                    <span>Пол: кошечка</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Scissors" size={18} className="text-accent" />
                    <span>Короткошёрстная</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Shield" size={18} className="text-accent" />
                    <span>Чипирована</span>
                  </div>
                </div>
                <div className="text-center mb-4">
                  <p className="text-3xl font-bold text-accent">35 000 ₽</p>
                </div>
                <div className="flex gap-3 justify-center">
                  <a
                    href="https://t.me/brimur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full transition-all hover:scale-110 shadow-md"
                    title="Telegram"
                  >
                    <Icon name="Send" size={20} />
                  </a>
                  <a
                    href="https://wa.me/79164402501"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-green-600 hover:bg-green-700 text-white rounded-full transition-all hover:scale-110 shadow-md"
                    title="WhatsApp"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-2xl transition-shadow duration-300 relative">
              <div className="absolute top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-full font-bold shadow-lg z-10">
                Котёнок
              </div>
              <KittenCarousel />
              <CardContent className="p-6">
                <div className="space-y-2 text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Icon name="Calendar" size={18} className="text-accent" />
                    <span>Дата рождения: 24 сентября 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Palette" size={18} className="text-accent" />
                    <span>Окрас: голубой</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Sparkles" size={18} className="text-accent" />
                    <span>Пол: котик</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Scissors" size={18} className="text-accent" />
                    <span>Длинношёрстный</span>
                  </div>
                </div>
                <div className="text-center mb-4">
                  <p className="text-3xl font-bold text-accent">60 000 ₽</p>
                </div>
                <div className="flex gap-3 justify-center">
                  <a
                    href="https://t.me/brimur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full transition-all hover:scale-110 shadow-md"
                    title="Telegram"
                  >
                    <Icon name="Send" size={20} />
                  </a>
                  <a
                    href="https://wa.me/79164402501"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-green-600 hover:bg-green-700 text-white rounded-full transition-all hover:scale-110 shadow-md"
                    title="WhatsApp"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </a>
                </div>
              </CardContent>
            </Card>

          </div>
          
          <div className="mt-12 text-center bg-card p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-4">Условия приобретения</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left mb-8">
              <div>
                <Icon name="FileCheck" size={24} className="text-accent mb-3" />
                <h4 className="font-semibold mb-2">Документы</h4>
                <p className="text-sm text-muted-foreground">Документ о происхождении, ветпаспорт, договор купли-продажи</p>
              </div>
              <div>
                <Icon name="Shield" size={24} className="text-accent mb-3" />
                <h4 className="font-semibold mb-2">Здоровье</h4>
                <p className="text-sm text-muted-foreground">Все прививки по возрасту, обработка от паразитов</p>
              </div>
              <div>
                <Icon name="Heart" size={24} className="text-accent mb-3" />
                <h4 className="font-semibold mb-2">Поддержка</h4>
                <p className="text-sm text-muted-foreground">Консультации и помощь после приобретения</p>
              </div>
            </div>
            <div className="bg-green-50 border-2 border-green-500 rounded-xl p-6 mb-6">
              <div className="flex items-start gap-3">
                <Icon name="BadgeCheck" size={28} className="text-green-600 flex-shrink-0 mt-1" />
                <div className="text-left">
                  <h4 className="font-semibold text-lg mb-2 text-green-900">Чек о покупке</h4>
                  <p className="text-sm text-green-800">
                    Мы один из немногих питомников, если не единственный, который предоставляет чек о покупке. 
                    Наша деятельность прозрачна как для покупателя, так и для налоговой.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-accent/10 border-2 border-accent rounded-xl p-6 mb-6">
              <div className="flex items-start gap-3">
                <Icon name="Tag" size={28} className="text-accent flex-shrink-0 mt-1" />
                <div className="text-left">
                  <h4 className="font-semibold text-lg mb-2">Скидка 5% при наличии сеток «Антикошка»</h4>
                  <p className="text-sm text-muted-foreground">
                    Так как мы заботимся о своих питомцах, а также о тех, кого мы передаём новым хозяевам, 
                    мы предоставляем скидку всем покупателям, у которых предустановлены сетки «Антикошка». 
                    Скидка составляет 5% от стоимости котёнка.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 border-2 border-blue-500 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <Icon name="CreditCard" size={28} className="text-blue-600 flex-shrink-0 mt-1" />
                <div className="text-left">
                  <h4 className="font-semibold text-lg mb-2 text-blue-900">Мы принимаем только безналичную оплату</h4>
                  <p className="text-sm text-blue-800">
                    Для вашего удобства и безопасности все расчёты производятся безналичным способом.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-primary mb-16">Галерея</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div 
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage("https://cdn.poehali.dev/files/3e7c8bca-e095-4270-9e60-5c762849501e.jpg")}
            >
              <img 
                src="https://cdn.poehali.dev/files/3e7c8bca-e095-4270-9e60-5c762849501e.jpg"
                alt="На игровом комплексе"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-2xl font-semibold">Игры</h3>
                  <p className="text-white/90">На комплексе</p>
                </div>
              </div>
            </div>

            <div 
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage("https://cdn.poehali.dev/files/f08b0892-a66d-44b5-9293-e3d2885e0957.jpg")}
            >
              <img 
                src="https://cdn.poehali.dev/files/f08b0892-a66d-44b5-9293-e3d2885e0957.jpg"
                alt="На лежанке"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-2xl font-semibold">Уют</h3>
                  <p className="text-white/90">На лежанке</p>
                </div>
              </div>
            </div>

            <div 
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage("https://cdn.poehali.dev/files/4e4ae41e-206f-40a3-958e-d0b6b8069e35.jpg")}
            >
              <img 
                src="https://cdn.poehali.dev/files/4e4ae41e-206f-40a3-958e-d0b6b8069e35.jpg"
                alt="Взгляд"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-2xl font-semibold">Взгляд</h3>
                  <p className="text-white/90">Голубой британец</p>
                </div>
              </div>
            </div>

            <div 
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage("https://cdn.poehali.dev/files/b0feae91-95cd-41fb-bbae-0eb44f3d6165.jpg")}
            >
              <img 
                src="https://cdn.poehali.dev/files/b0feae91-95cd-41fb-bbae-0eb44f3d6165.jpg"
                alt="Папа"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-2xl font-semibold">Папа</h3>
                  <p className="text-white/90">Производитель</p>
                </div>
              </div>
            </div>

            <div 
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage("https://cdn.poehali.dev/files/a6088cdf-8c38-439b-b9f8-e8e989826385.jpg")}
            >
              <img 
                src="https://cdn.poehali.dev/files/a6088cdf-8c38-439b-b9f8-e8e989826385.jpg"
                alt="Новогоднее фото"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-2xl font-semibold">Праздник</h3>
                  <p className="text-white/90">Новогоднее настроение</p>
                </div>
              </div>
            </div>

            <div 
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage("https://cdn.poehali.dev/files/82a1765b-c14e-4c89-9edf-ffa334f70056.jpg")}
            >
              <img 
                src="https://cdn.poehali.dev/files/82a1765b-c14e-4c89-9edf-ffa334f70056.jpg"
                alt="Мама с котятами"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-2xl font-semibold">Семья</h3>
                  <p className="text-white/90">Мама с котятами</p>
                </div>
              </div>
            </div>

            <div 
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage("https://cdn.poehali.dev/files/7055a6d5-df47-4be3-b66c-5c4aba1be4f5.jpg")}
            >
              <img 
                src="https://cdn.poehali.dev/files/7055a6d5-df47-4be3-b66c-5c4aba1be4f5.jpg"
                alt="Британский котёнок"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-2xl font-semibold">Красавчик</h3>
                  <p className="text-white/90">Голубой британец</p>
                </div>
              </div>
            </div>

            <div 
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage("https://cdn.poehali.dev/files/2dff0f30-4f06-45b9-8d23-e94a4993f965.jpg")}
            >
              <img 
                src="https://cdn.poehali.dev/files/2dff0f30-4f06-45b9-8d23-e94a4993f965.jpg"
                alt="Папа"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-2xl font-semibold">Папа</h3>
                  <p className="text-white/90">Производитель</p>
                </div>
              </div>
            </div>

            <div 
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage("https://cdn.poehali.dev/files/c705dbef-2be6-43d2-8ea9-0e1a173c2a89.jpg")}
            >
              <img 
                src="https://cdn.poehali.dev/files/c705dbef-2be6-43d2-8ea9-0e1a173c2a89.jpg"
                alt="Британская кошка"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-2xl font-semibold">Комфорт</h3>
                  <p className="text-white/90">На любимой лежанке</p>
                </div>
              </div>
            </div>

            <div 
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage("https://cdn.poehali.dev/files/fde89f55-594b-45bc-8a48-0c08706cd3a9.jpg")}
            >
              <img 
                src="https://cdn.poehali.dev/files/fde89f55-594b-45bc-8a48-0c08706cd3a9.jpg"
                alt="Софа"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-2xl font-semibold">Софа</h3>
                  <p className="text-white/90">Фотосессия</p>
                </div>
              </div>
            </div>

            <div 
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage("https://cdn.poehali.dev/files/d4612fd6-284e-4a76-b9f3-1869ff9592d3.jpg")}
            >
              <img 
                src="https://cdn.poehali.dev/files/d4612fd6-284e-4a76-b9f3-1869ff9592d3.jpg"
                alt="Бэба"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-2xl font-semibold">Бэба</h3>
                  <p className="text-white/90">Мама-кошка</p>
                </div>
              </div>
            </div>

            <div 
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage("https://cdn.poehali.dev/files/7044a2e1-43a3-411a-93d5-046812b28143.jpg")}
            >
              <img 
                src="https://cdn.poehali.dev/files/7044a2e1-43a3-411a-93d5-046812b28143.jpg"
                alt="Бэба с котятами"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-2xl font-semibold">Бэба с котятами</h3>
                  <p className="text-white/90">Семейное фото</p>
                </div>
              </div>
            </div>

            <div 
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage("https://cdn.poehali.dev/files/50bb38da-6e14-4395-afca-301349c3eaf5.jpg")}
            >
              <img 
                src="https://cdn.poehali.dev/files/50bb38da-6e14-4395-afca-301349c3eaf5.jpg"
                alt="Лежит"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-2xl font-semibold">Спокойствие</h3>
                  <p className="text-white/90">Голубой британец</p>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>

      <section id="contact" className="py-20 px-4 sm:px-6 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-primary mb-16">Свяжитесь с нами</h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Контактная информация</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" size={24} className="text-accent mt-1" />
                  <div>
                    <p className="font-semibold">Адрес</p>
                    <p className="text-muted-foreground">ЖК Восточное Бутово, Московская область</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <svg className="text-accent mt-1" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <div>
                    <p className="font-semibold">Телефон (WhatsApp)</p>
                    <a href="https://wa.me/79164402501" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">+7 916 440 2501</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Send" size={24} className="text-accent mt-1" />
                  <div>
                    <p className="font-semibold">Telegram</p>
                    <a href="https://t.me/brimur" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">@brimur</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="ShoppingBag" size={24} className="text-accent mt-1" />
                  <div>
                    <p className="font-semibold">Мы на <a href="https://www.avito.ru/brands/i346680311" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Авито</a></p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Youtube" size={24} className="text-accent mt-1" />
                  <div>
                    <p className="font-semibold">Мы на <a href="https://m.youtube.com/channel/UCBqtn8tdy9d1FyynwGBBMvg" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">YouTube</a></p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-1"><strong>БриМурр</strong></p>
                  <p className="text-xs text-muted-foreground">ИНН: 770-481-882-204</p>
                  <p className="text-xs text-muted-foreground">ОГРНИП: 325-508-100-612-240</p>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6 text-center">Связаться с нами</h3>
                <div className="flex gap-4 justify-center">
                  <a
                    href="https://t.me/brimur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-16 h-16 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full transition-all hover:scale-110 shadow-lg"
                    title="Telegram"
                  >
                    <Icon name="Send" size={28} />
                  </a>
                  <a
                    href="https://wa.me/79164402501"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-16 h-16 bg-green-600 hover:bg-green-700 text-white rounded-full transition-all hover:scale-110 shadow-lg"
                    title="WhatsApp"
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-6">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">БриМурр</h3>
          <p className="text-primary-foreground/80 mb-6">
            Питомник британских кошек в Москве
          </p>
          <div className="flex justify-center gap-6">
            <a href="https://t.me/brimur" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              <Icon name="Send" size={24} />
            </a>
            <a href="https://wa.me/79164402501" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>
            <a href="https://m.youtube.com/channel/UCBqtn8tdy9d1FyynwGBBMvg" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              <Icon name="Youtube" size={24} />
            </a>
          </div>
        </div>
      </footer>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <Icon name="X" size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt="Увеличенное фото"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
        <a
          href="https://t.me/brimur"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent hover:bg-accent/90 text-accent-foreground p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
          aria-label="Написать в Telegram"
        >
          <Icon name="Send" size={28} />
        </a>
        <a
          href="https://wa.me/79164402501"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
          aria-label="Написать в WhatsApp"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Index;