// src/seo.js
export function updateSEO({ title, description, url, image }) {
  // Update document title
  document.title = title || "Chrishen Silva | Welcome to official website";

  // Update meta description
  let descTag = document.querySelector('meta[name="description"]');
  if (!descTag) {
    descTag = document.createElement('meta');
    descTag.setAttribute('name', 'description');
    document.head.appendChild(descTag);
  }
  descTag.setAttribute('content', description || "Discover and Listen to latest releases and news from Chrishen Silva.");

  // OpenGraph tags
  const ogTags = [
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:image", content: image },
    { property: "og:type", content: "website" }
  ];

  ogTags.forEach(({ property, content }) => {
    let tag = document.querySelector(`meta[property="${property}"]`);
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('property', property);
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', content || "");
  });

  // Structured JSON-LD schema for Website
  let scriptTag = document.querySelector('script[type="application/ld+json"]');
  if (!scriptTag) {
    scriptTag = document.createElement('script');
    scriptTag.type = 'application/ld+json';
    document.head.appendChild(scriptTag);
  }

  scriptTag.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": title,
    "url": url,
    "description": description
  });
}
