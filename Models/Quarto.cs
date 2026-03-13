namespace DonaMarleneMVC.Models
{
    public class Quarto
    {
        public int Id { get; set; }
        public string Nome { get; set; } = string.Empty;
        public string Descricao { get; set; } = string.Empty;
        public int Capacidade { get; set; }
        public string Imagem { get; set; } = string.Empty;
        public List<string> Comodidades { get; set; } = new();
    }
}
