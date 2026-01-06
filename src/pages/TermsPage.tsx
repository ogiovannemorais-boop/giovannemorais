import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function TermsPage() {
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
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Termos de Uso</h1>
            
            <div className="prose prose-invert max-w-none prose-headings:font-semibold prose-p:text-muted-foreground prose-li:text-muted-foreground">
              <p>Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

              <h2>1. Aceitação dos Termos</h2>
              <p>
                Ao acessar e usar este site, você concorda em cumprir e estar vinculado a estes 
                Termos de Uso. Se você não concordar com qualquer parte destes termos, não deve 
                usar este site.
              </p>

              <h2>2. Uso do Site</h2>
              <p>
                Este site é destinado a fornecer informações sobre nossos serviços de marketing 
                digital, tráfego pago e consultoria em IA. Você concorda em usar o site apenas 
                para fins legais e de acordo com estes termos.
              </p>

              <h2>3. Propriedade Intelectual</h2>
              <p>
                Todo o conteúdo deste site, incluindo textos, gráficos, logos, imagens e software, 
                é de propriedade exclusiva ou licenciado para nós e está protegido por leis de 
                direitos autorais.
              </p>

              <h2>4. Limitação de Responsabilidade</h2>
              <p>
                As informações fornecidas neste site são apenas para fins informativos gerais. 
                Não garantimos a precisão, completude ou utilidade de qualquer informação. 
                Qualquer confiança que você depositar em tais informações será por sua conta e risco.
              </p>

              <h2>5. Links Externos</h2>
              <p>
                Este site pode conter links para sites de terceiros. Não temos controle sobre o 
                conteúdo ou práticas de privacidade desses sites e não nos responsabilizamos por eles.
              </p>

              <h2>6. Serviços</h2>
              <p>
                Os serviços oferecidos estão sujeitos a contratos específicos com termos, condições 
                e preços acordados individualmente. O conteúdo deste site não constitui uma oferta 
                vinculante.
              </p>

              <h2>7. Modificações</h2>
              <p>
                Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações 
                entrarão em vigor imediatamente após a publicação no site.
              </p>

              <h2>8. Lei Aplicável</h2>
              <p>
                Estes termos são regidos pelas leis da República Federativa do Brasil. Qualquer 
                disputa será resolvida nos tribunais competentes da comarca de [Cidade/Estado].
              </p>

              <h2>9. Contato</h2>
              <p>
                Para dúvidas sobre estes termos, entre em contato através do WhatsApp 
                (16) 98803-7193 ou e-mail contato@giovanne.com.br.
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

export default TermsPage;
