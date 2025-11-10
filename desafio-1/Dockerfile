# Usa a imagem oficial do Apache
FROM httpd:2.4

# Remove os arquivos padrão do Apache
RUN rm -rf /usr/local/apache2/htdocs/*

# Copia os arquivos da aplicação para o diretório do Apache
COPY src/ /usr/local/apache2/htdocs/

# Expõe a porta 80
EXPOSE 80

# Comando para iniciar o Apache
CMD ["httpd-foreground"]