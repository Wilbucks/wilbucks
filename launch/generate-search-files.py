"""Run only after launch approval: python3 launch/generate-search-files.py https://final-host.example /tmp/wilbucks-launch"""
import sys
from pathlib import Path
from urllib.parse import urlparse
from xml.sax.saxutils import escape

if len(sys.argv) != 3:
    raise SystemExit("Supply the approved HTTPS origin/integration path and an output directory.")
origin = sys.argv[1].rstrip("/")
parsed = urlparse(origin)
if parsed.scheme != "https" or not parsed.netloc or parsed.query or parsed.fragment:
    raise SystemExit("Use an absolute HTTPS origin with an optional integration path, without a query or fragment.")
output = Path(sys.argv[2])
output.mkdir(parents=True, exist_ok=True)
paths = ["/", "/about", "/marie-wilcox", "/simon-wilcox"]
urls = "\n".join(f"  <url><loc>{escape(origin + path)}</loc></url>" for path in paths)
(output / "sitemap.xml").write_text('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + urls + "\n</urlset>\n")
(output / "robots.txt").write_text(f"User-agent: *\nAllow: /\nSitemap: {origin}/sitemap.xml\n")