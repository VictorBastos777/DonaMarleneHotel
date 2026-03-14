using Microsoft.AspNetCore.Mvc;
using DonaMarleneMVC.Models;

namespace DonaMarleneMVC.Controllers
{
    public class HomeController : Controller
    {
        private readonly HotelInfo _hotel = new();

        public IActionResult Index()
        {
            var quartos = GetQuartos();
            ViewBag.Hotel = _hotel;
            ViewBag.Quartos = quartos;
            return View();
        }

        public IActionResult Sobre()
        {
            ViewBag.Hotel = _hotel;
            return View();
        }

        public IActionResult Galeria()
        {
            ViewBag.Hotel = _hotel;
            ViewBag.Galeria = GetGaleria();
            return View();
        }

        public IActionResult Contato()
        {
            ViewBag.Hotel = _hotel;
            return View();
        }

        private static List<Quarto> GetQuartos()
        {
            return new List<Quarto>
            {
                new Quarto
                {
                    Id = 1,
                    Nome = "Quarto Solteiro",
                    Descricao = "Confortável e aconchegante, ideal para viajantes que buscam o melhor custo-benefício com toda a qualidade Dona Marlene.",
                    Capacidade = 1,
                    Imagem = "/images/QuartoSolteiro.webp",
                    Comodidades = new List<string> { "Ar-condicionado", "TV a cabo", "Wi-Fi", "Frigobar", "Banheiro privativo" }
                },
                new Quarto
                {
                    Id = 2,
                    Nome = "Quarto Casal+",
                    Descricao = "Espaçoso e bem equipado, perfeito para casais ou duplas que desejam conforto e privacidade durante a estadia.",
                    Capacidade = 2,
                    Imagem = "/images/QuartoCasalMais.webp",
                    Comodidades = new List<string> { "Ar-condicionado", "TV a cabo", "Wi-Fi", "Frigobar", "Banheiro privativo" }
                },
                new Quarto
                {
                    Id = 3,
                    Nome = "Quarto Família",
                    Descricao = "Amplo e aconchegante, projetado para receber famílias com toda a estrutura necessária para uma estadia agradável.",
                    Capacidade = 4,
                    Imagem = "/images/QuartoFamilia.webp",
                    Comodidades = new List<string> { "Ar-condicionado", "TV a cabo", "Wi-Fi", "Frigobar", "Banheiro privativo", "Camas extras" }
                }
            };
        }

        private static List<GaleriaItem> GetGaleria()
        {
            return new List<GaleriaItem>
            {
                // Ambiente
                new GaleriaItem { Id = 1, Titulo = "Fim de Tarde em Codajás", Imagem = "/images/Por do sol.webp", Categoria = "Ambiente" },
                new GaleriaItem { Id = 2, Titulo = "Fachada do Hotel Dona Marlene", Imagem = "/images/hotel_hero.webp", Categoria = "Ambiente" },
                new GaleriaItem { Id = 3, Titulo = "Entrada Principal", Imagem = "/images/Frente.webp", Categoria = "Ambiente" },

                // Áreas Comuns
                new GaleriaItem { Id = 4, Titulo = "Nossos Corredores", Imagem = "/images/Corredor1.webp", Categoria = "Áreas Comuns" },
                new GaleriaItem { Id = 5, Titulo = "Acesso aos Quartos", Imagem = "/images/Corredor2.webp", Categoria = "Áreas Comuns" },
                new GaleriaItem { Id = 6, Titulo = "Estacionamento Seguro para Motos", Imagem = "/images/GaragemMotos1.webp", Categoria = "Áreas Comuns" },

                // Quartos
                new GaleriaItem { Id = 7, Titulo = "Aconchego para Solteiros", Imagem = "/images/QuartoSolteiro.webp", Categoria = "Quartos" },
                new GaleriaItem { Id = 8, Titulo = "Quarto Família Espaçoso", Imagem = "/images/QuartoFamilia1.webp", Categoria = "Quartos" },
                new GaleriaItem { Id = 9, Titulo = "Hospedagem Familiar", Imagem = "/images/QuartoFamilia.webp", Categoria = "Quartos" },
                new GaleriaItem { Id = 10, Titulo = "Quarto Casal Conforto", Imagem = "/images/QuartoCasalMais.webp", Categoria = "Quartos" },
                new GaleriaItem { Id = 11, Titulo = "Banheiro Privativo e Limpo", Imagem = "/images/Banheiro.webp", Categoria = "Quartos" }
            };
        }
    }
}
