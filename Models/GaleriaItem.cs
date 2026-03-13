namespace DonaMarleneMVC.Models
{
    public class GaleriaItem
    {
        public int Id { get; set; }
        public string Titulo { get; set; } = string.Empty;
        public string Imagem { get; set; } = string.Empty;
        public string Categoria { get; set; } = string.Empty; // "Quartos", "Áreas Comuns", "Ambiente"
    }
}
