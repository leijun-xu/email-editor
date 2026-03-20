FROM /nginx:1.25.2

EXPOSE 80

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY ./dist /usr/share/nginx/html
