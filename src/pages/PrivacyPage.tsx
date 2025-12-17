import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function PrivacyPage() {
  return (
    <div className="beams-background">
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <nav className="mb-8 animate-fade-in">
            <Link 
              to="/" 
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao início
            </Link>
          </nav>

          <article className="animate-fade-in delay-100">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Política de Privacidade</h1>
            
            <div className="prose prose-invert max-w-none prose-headings:font-semibold prose-p:text-muted-foreground prose-li:text-muted-foreground">
              <p>Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

              <h2>1. Informações que coletamos</h2>
              <p>
                Coletamos informações que você nos fornece diretamente, como nome, e-mail e telefone 
                quando preenche formulários de contato ou agenda uma conversa.
              </p>

              <h2>2. Como usamos suas informações</h2>
              <p>Utilizamos suas informações para:</p>
              <ul>
                <li>Entrar em contato sobre nossos serviços</li>
                <li>Enviar conteúdos relevantes (com seu consentimento)</li>
                <li>Melhorar nossos serviços e experiência do usuário</li>
              </ul>

              <h2>3. Compartilhamento de dados</h2>
              <p>
                Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros 
                para fins de marketing. Podemos compartilhar dados com prestadores de serviços 
                que nos ajudam a operar o site, sempre sob acordos de confidencialidade.
              </p>

              <h2>4. Cookies e tecnologias similares</h2>
              <p>
                Utilizamos cookies e tecnologias similares para melhorar sua experiência, 
                analisar tráfego e personalizar conteúdo. Você pode gerenciar suas preferências 
                de cookies nas configurações do seu navegador.
              </p>

              <h2>5. Segurança</h2>
              <p>
                Implementamos medidas de segurança técnicas e organizacionais para proteger 
                suas informações contra acesso não autorizado, alteração ou destruição.
              </p>

              <h2>6. Seus direitos (LGPD)</h2>
              <p>De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:</p>
              <ul>
                <li>Acessar seus dados pessoais</li>
                <li>Corrigir dados incompletos ou desatualizados</li>
                <li>Solicitar a exclusão de seus dados</li>
                <li>Revogar consentimento a qualquer momento</li>
              </ul>

              <h2>7. Contato</h2>
              <p>
                Para exercer seus direitos ou esclarecer dúvidas sobre esta política, 
                entre em contato através do WhatsApp (16) 98803-7193 ou e-mail contato@giovanne.com.br.
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

export default PrivacyPage;
