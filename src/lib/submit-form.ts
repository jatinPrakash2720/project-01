export type ContactFormPayload = {
  type: 'contact';
  name: string;
  email: string;
  phone?: string;
  role?: string;
  message?: string;
};

export type AnonymousFormPayload = {
  type: 'anonymous';
  message: string;
};

export async function submitWebsiteForm(
  payload: ContactFormPayload | AnonymousFormPayload
) {
  const res = await fetch('/api/forms', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const data = (await res.json().catch(() => ({}))) as {
    ok?: boolean;
    error?: string;
  };

  if (!res.ok || !data.ok) {
    throw new Error(data.error || 'Failed to send message');
  }

  return data;
}
