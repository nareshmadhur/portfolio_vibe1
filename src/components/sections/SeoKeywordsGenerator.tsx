'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { suggestSeoKeywords, type SeoKeywordSuggestionsInput } from '@/ai/flows/seo-keyword-suggestions';
import { seoKeywordInputs as defaultInputs } from '@/lib/constants';
import { Loader2, Wand2 } from 'lucide-react';
import { Badge } from '../ui/badge';
import { useToast } from '@/hooks/use-toast';

export default function SeoKeywordsGenerator() {
  const [isLoading, setIsLoading] = useState(false);
  const [keywords, setKeywords] = useState<string[]>([]);
  const [inputs, setInputs] = useState<SeoKeywordSuggestionsInput>(defaultInputs);
  const { toast } = useToast();

  const handleInputChange = (field: keyof SeoKeywordSuggestionsInput, value: string) => {
    // For simplicity, this example treats array inputs as single strings.
    // A real UI would allow adding/removing items for each array.
    setInputs(prev => ({ ...prev, [field]: value.split('\n') }));
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setKeywords([]);
    try {
      const result = await suggestSeoKeywords(inputs);
      if (result && result.keywords) {
        setKeywords(result.keywords);
        toast({
            title: "SEO Keywords Generated!",
            description: "Successfully fetched keyword suggestions."
        });
      } else {
        toast({
            title: "Error",
            description: "Could not generate keywords. AI returned no data.",
            variant: "destructive"
        });
      }
    } catch (error) {
      console.error("Error generating SEO keywords:", error);
      toast({
        title: "Error Generating Keywords",
        description: error instanceof Error ? error.message : "An unknown error occurred.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="max-w-3xl mx-auto shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center">
            <Wand2 className="mr-2 h-6 w-6 text-accent" />
            AI-Powered SEO Keyword Suggester
        </CardTitle>
        <CardDescription>
          Analyze your portfolio content and get relevant SEO keyword suggestions to enhance discoverability. 
          Default content is pre-filled from your portfolio data.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <label htmlFor="engineeringProjects" className="block text-sm font-medium text-foreground mb-1">
            Engineering Projects (one per line)
          </label>
          <Textarea
            id="engineeringProjects"
            value={inputs.engineeringProjects.join('\n')}
            onChange={(e) => handleInputChange('engineeringProjects', e.target.value)}
            placeholder="Describe your engineering projects..."
            rows={3}
            className="bg-background/50"
          />
        </div>
        <div>
          <label htmlFor="musicContent" className="block text-sm font-medium text-foreground mb-1">
            Music Content (one per line)
          </label>
          <Textarea
            id="musicContent"
            value={inputs.musicContent.join('\n')}
            onChange={(e) => handleInputChange('musicContent', e.target.value)}
            placeholder="Describe your music content..."
            rows={3}
            className="bg-background/50"
          />
        </div>
        <div>
          <label htmlFor="photographyContent" className="block text-sm font-medium text-foreground mb-1">
            Photography Content (one per line)
          </label>
          <Textarea
            id="photographyContent"
            value={inputs.photographyContent.join('\n')}
            onChange={(e) => handleInputChange('photographyContent', e.target.value)}
            placeholder="Describe your photography content..."
            rows={3}
            className="bg-background/50"
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start space-y-4">
        <Button onClick={handleSubmit} disabled={isLoading} className="w-full md:w-auto bg-primary hover:bg-primary/90">
          {isLoading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Wand2 className="mr-2 h-4 w-4" />
          )}
          {isLoading ? 'Generating...' : 'Generate Keywords'}
        </Button>
        {keywords.length > 0 && (
          <div className="w-full pt-4 border-t">
            <h3 className="text-lg font-semibold mb-2 text-primary">Suggested Keywords:</h3>
            <div className="flex flex-wrap gap-2">
              {keywords.map((keyword, index) => (
                <Badge key={index} variant="default" className="text-sm bg-accent text-accent-foreground hover:bg-accent/80">
                  {keyword}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
