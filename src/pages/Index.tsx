import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const bikes = [
  {
    id: 1,
    name: 'Хаки Маунтин Pro',
    price: '45 990 ₽',
    image: '/img/43f0aecd-d25e-4432-afdb-a237b5f8fb26.jpg',
    category: 'Велосипеды',
    specs: {
      weight: '12.5 кг',
      material: 'Карбон',
      wheels: '29"',
      gears: '21 скорость'
    },
    description: 'Профессиональный горный велосипед цвета хаки для экстремальных приключений'
  },
  {
    id: 2,
    name: 'Урбан Хаки Light',
    price: '32 990 ₽',
    image: '/img/43f0aecd-d25e-4432-afdb-a237b5f8fb26.jpg',
    category: 'Велосипеды',
    specs: {
      weight: '10.2 кг',
      material: 'Алюминий',
      wheels: '26"',
      gears: '18 скорость'
    },
    description: 'Городской велосипед в стиле милитари для ежедневных поездок'
  }
];

const oranges = [
  {
    id: 3,
    name: 'Зеленые апельсины Premium',
    price: '890 ₽/кг',
    image: '/img/e8388cb7-fdfe-484a-a76a-314034416746.jpg',
    category: 'Апельсины',
    specs: {
      weight: '180-220 г',
      origin: 'Испания',
      sweetness: '12° Brix',
      season: 'Круглый год'
    },
    description: 'Экзотические зеленые апельсины с насыщенным вкусом и ароматом'
  },
  {
    id: 4,
    name: 'Зеленые апельсины Organic',
    price: '1 290 ₽/кг',
    image: '/img/e8388cb7-fdfe-484a-a76a-314034416746.jpg',
    category: 'Апельсины',
    specs: {
      weight: '200-250 г',
      origin: 'Италия',
      sweetness: '14° Brix',
      season: 'Зима-Весна'
    },
    description: 'Органические зеленые апельсины без химикатов, выращенные в Италии'
  }
];

const allProducts = [...bikes, ...oranges];

export default function Index() {
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  const [activeCategory, setActiveCategory] = useState('Все');

  const categories = ['Все', 'Велосипеды', 'Апельсины'];
  
  const filteredProducts = activeCategory === 'Все' 
    ? allProducts 
    : allProducts.filter(product => product.category === activeCategory);

  const toggleProductSelection = (productId: number) => {
    setSelectedProducts(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const selectedProductsData = allProducts.filter(product => 
    selectedProducts.includes(product.id)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-khaki-light to-orange-light">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-2xl font-bold text-khaki-dark">
                🚲🍊 Хаки & Апельсин
              </div>
              <nav className="hidden md:flex gap-6">
                <a href="#" className="text-gray-600 hover:text-khaki-dark transition-colors">Главная</a>
                <a href="#catalog" className="text-gray-600 hover:text-khaki-dark transition-colors">Каталог</a>
                <a href="#delivery" className="text-gray-600 hover:text-khaki-dark transition-colors">Доставка</a>
                <a href="#contacts" className="text-gray-600 hover:text-khaki-dark transition-colors">Контакты</a>
              </nav>
            </div>
            <Button className="bg-khaki text-white hover:bg-khaki-dark">
              <Icon name="ShoppingCart" size={20} />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Велосипеды цвета хаки <br />
            <span className="text-orange">& Зеленые апельсины</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Уникальное сочетание экстремальных приключений и экзотических вкусов. 
            Откройте для себя мир хаки велосипедов и зеленых апельсинов премиум качества.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-white text-khaki-dark hover:bg-gray-100">
              <Icon name="Bike" size={20} className="mr-2" />
              Велосипеды
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-khaki-dark">
              <span className="mr-2">🍊</span>
              Апельсины
            </Button>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-khaki-dark">Каталог товаров</h2>
          
          {/* Category Filter */}
          <div className="flex justify-center mb-8">
            <div className="flex gap-2 p-1 bg-gray-100 rounded-full">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full transition-all ${
                    activeCategory === category 
                      ? 'bg-khaki text-white shadow-md' 
                      : 'text-gray-600 hover:text-khaki-dark'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardHeader className="p-0">
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge 
                      className={`absolute top-2 right-2 ${
                        product.category === 'Велосипеды' 
                          ? 'bg-khaki' 
                          : 'bg-orange'
                      }`}
                    >
                      {product.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-lg mb-2 text-khaki-dark">{product.name}</CardTitle>
                  <CardDescription className="text-sm mb-3">{product.description}</CardDescription>
                  <div className="text-2xl font-bold text-orange mb-3">{product.price}</div>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex gap-2">
                  <Button 
                    className="flex-1 bg-khaki hover:bg-khaki-dark text-white"
                  >
                    Купить
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => toggleProductSelection(product.id)}
                    className={selectedProducts.includes(product.id) ? 'bg-orange text-white border-orange' : ''}
                  >
                    <Icon name="GitCompare" size={18} />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Comparison Section */}
          {selectedProducts.length > 0 && (
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-6 text-khaki-dark flex items-center gap-2">
                <Icon name="GitCompare" size={24} />
                Сравнение характеристик ({selectedProducts.length})
              </h3>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-khaki/20">
                      <th className="text-left p-3 font-semibold text-khaki-dark">Параметр</th>
                      {selectedProductsData.map(product => (
                        <th key={product.id} className="text-center p-3 min-w-48">
                          <div className="flex flex-col items-center">
                            <img 
                              src={product.image} 
                              alt={product.name}
                              className="w-16 h-16 object-cover rounded-lg mb-2"
                            />
                            <div className="font-semibold text-khaki-dark text-sm">{product.name}</div>
                            <div className="text-orange font-bold">{product.price}</div>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(selectedProductsData[0]?.specs || {}).map(spec => (
                      <tr key={spec} className="border-b border-gray-200">
                        <td className="p-3 font-medium text-gray-700 capitalize">
                          {spec === 'weight' ? 'Вес' : 
                           spec === 'material' ? 'Материал' :
                           spec === 'wheels' ? 'Колеса' :
                           spec === 'gears' ? 'Скорости' :
                           spec === 'origin' ? 'Происхождение' :
                           spec === 'sweetness' ? 'Сладость' :
                           spec === 'season' ? 'Сезон' : spec}
                        </td>
                        {selectedProductsData.map(product => (
                          <td key={product.id} className="p-3 text-center text-gray-600">
                            {product.specs[spec as keyof typeof product.specs]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="flex justify-center mt-6">
                <Button 
                  variant="outline"
                  onClick={() => setSelectedProducts([])}
                  className="border-gray-300 text-gray-600 hover:bg-gray-100"
                >
                  Очистить сравнение
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Delivery Section */}
      <section id="delivery" className="py-16 bg-gradient-to-r from-khaki/10 to-orange/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-khaki rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-khaki-dark">Быстрая доставка</h3>
              <p className="text-gray-600">Доставляем велосипеды и апельсины по всей России за 1-3 дня</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-khaki-dark">Гарантия качества</h3>
              <p className="text-gray-600">100% гарантия на все товары и возврат в течение 30 дней</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-khaki rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Headphones" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-khaki-dark">Поддержка 24/7</h3>
              <p className="text-gray-600">Наши эксперты всегда готовы помочь с выбором и консультацией</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacts" className="bg-khaki-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">🚲🍊 Хаки & Апельсин</div>
              <p className="text-gray-300">Уникальный магазин велосипедов цвета хаки и зеленых апельсинов</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-orange transition-colors">Велосипеды</a></li>
                <li><a href="#" className="hover:text-orange transition-colors">Апельсины</a></li>
                <li><a href="#" className="hover:text-orange transition-colors">Аксессуары</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-orange transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-orange transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-orange transition-colors">Гарантия</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (800) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@khaki-orange.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, ул. Примерная, 123
                </li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-gray-600" />
          <div className="text-center text-gray-300">
            <p>&copy; 2024 Хаки & Апельсин. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}