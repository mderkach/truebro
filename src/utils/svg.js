// import all svg
// собирает спрайт в dist, не изменять пути к ссылкам на проде, т.к. скрипт используется только в dev
const requireAll = function (r) {
  r.keys().forEach(r);
};

requireAll(require.context('../assets/svg/', true, /\.svg$/));
if (process.env.NODE_ENV !== 'production') {
  console.log(`svg sprite ready in current mode: ${process.env.NODE_ENV}`);
}
