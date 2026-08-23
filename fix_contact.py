import re

with open('src/pages/Contact.tsx', 'r') as f:
    content = f.read()

# Replace the fetch call
old_submit = """    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      if (!res.ok) throw new Error('Submission failed');
      
      setStatus("success");
    } catch (err) {
      setStatus("error");
    }"""

new_submit = """    try {
      // Simulate network request
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus("success");
    } catch (err) {
      setStatus("error");
    }"""

content = content.replace(old_submit, new_submit)

with open('src/pages/Contact.tsx', 'w') as f:
    f.write(content)
