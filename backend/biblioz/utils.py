def changes_image_url(url):
    if 'dropbox.com' in url and 'raw=1' not in url:
        if '&dl=0' in url:
            url = url.replace('&dl=0', '&raw=1')
    return url
