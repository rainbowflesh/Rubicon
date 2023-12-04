function generate_badge() {
  // 将SVG模板中的占位符替换为用户自定义文本
  const customText = req.query.text || "Custom Text";
  const svgWithText = data.replace("{customText}", customText);

  // 将带有用户文本的SVG发送给客户端
  res.header("Content-Type", "image/svg+xml");
  res.send(svgWithText);
}
