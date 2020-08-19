import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MarkingService} from './marking.service';
import {AuthService} from '../auth/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-marking',
  templateUrl: './marking.component.html',
  styleUrls: ['./marking.component.css']
})
export class MarkingComponent implements OnInit {
  markForm: FormGroup;
  criterias = [
    {
      name: 'Problem definition and structuring',
      formName: 'Problem_definition',
      marks: 3,
      visible: false,
      number1: [
        'Problem has been clearly defined, either explicitly or implicitly',
        'Problem has been effectively broken down into smaller components. The components cover most aspects needed to formulate the answer and there is minimal overlap between the individual components',
        ]
    },
    {
      name: 'Problem solving',
      formName: 'problem_solving',
      marks: 6,
      visible: false,
      number1: [
        'The use of a hypothesis led problem solving approach is evident in the report'],
      bullet1:[
        'Conceptual'],
      number2:[
        'The qualitative information provided has been interpreted correctly and have been used to develop logical arguments',
        'Creativity has been demonstrated in solving the problem'],
      bullet2:[
        'Analytical'],
      number3:[
        'The data provided has been interpreted correctly and have been used correctly in supporting the solution',
        'Calculations are correct, relevant and of sound logic',
        'Assumptions made are of sound logic and have been clearly defined',
        'If external data sources have been used to supplement solution, credible sources have been used have been appropriately cited'
      ]
    },
    {
      name: 'Recommendation',
      formName: 'Recommendation',
      marks: 5,
      visible: false,
      number1: [
        'A sound actionable recommendation is provided backed by data and logical reasoning',
        'Recommendation is within the scope and constraints of the problem',
      ]
    },
    {
      name: 'Communications',
      formName: 'Communication',
      marks: 3,
      visible: false,
      number1: [
        ' Messages have been effectively synthesised and communicated in a top down manner',
        'Coherent language has been used for text based communications (Minor spelling and grammatical errors are fine)',
        'Graphs and figures have been effectively used to communicate messages.',
      ]
    },
    {
      name: 'Presentation',
      formName: 'Presentation',
      marks: 3,
      visible: false,
      number1: [
        'The report format is well structured and easy to follow',
        'The report content is concise and follows a logical progression',
        'The pages are easy to read; the text is appropriately sized and the figures are legible'
      ]
    }
  ];
  updateData;
  pap;

  constructor(private fb: FormBuilder,
              private markService: MarkingService,
              private auth: AuthService,
              private activated: ActivatedRoute,
              private spinner: NgxSpinnerService,
              private router: Router) {
  }

  async ngOnInit() {
    this.spinner.show();
    this.activated.params.subscribe(async params => {
      if (params.id) {
        console.log(params.id);
        if (params.id) {
          console.log(params.id);
          this.pap = await this.markService.getPaper(params.id).toPromise();
          console.log(this.pap.data());
          this.updateData = this.pap.data();
          this.markForm = this.fb.group(
            {
              token: [this.auth.getToken(), Validators.required],
              Problem_definition: [this.updateData.innovativeness, [Validators.required, Validators.min(0), Validators.max(3)]],
              problem_solving: [this.updateData.requirement, [Validators.required, Validators.min(0), Validators.max(6)]],
              Recommendation: [this.updateData.channels, [Validators.required, Validators.min(0), Validators.max(5)]],
              Communication: [this.updateData.feasibility, [Validators.required, Validators.min(0), Validators.max(3)]],
              Presentation: [this.updateData.creativity, [Validators.required, Validators.min(0), Validators.max(3)]],
              teamName: [this.updateData.teamName, Validators.required],
              evaluator: [this.updateData.evaluator, Validators.required],
              total: [this.updateData.total],
            }
          );
          this.spinner.hide();
        }
      } else {
        this.markForm = this.fb.group(
          {
            token: [this.auth.getToken(), Validators.required],
            Problem_definition: ['', [Validators.required, Validators.min(0), Validators.max(3)]],
            problem_solving: ['', [Validators.required, Validators.min(0), Validators.max(6)]],
            Recommendation: ['', [Validators.required, Validators.min(0), Validators.max(5)]],
            Communication: ['', [Validators.required, Validators.min(0), Validators.max(3)]],
            Presentation: ['', [Validators.required, Validators.min(0), Validators.max(3)]],       
            teamName: ['', Validators.required],
            evaluator: ['', Validators.required],
            total: ['']
          }
        );
        this.spinner.hide();
      }
    });
  }

  submit() {
    this.spinner.show();
    if (this.markForm.valid) {
      let total = 0;
      this.criterias.forEach(val => {
        total = total + this.markForm.get('' + val.formName).value as number;
      });
      this.markForm.get('total').setValue(total);
      if (this.updateData) {
        this.markService.updateMarks(this.markForm.value, this.pap.id).then(
          val => {
            console.log('Success');
            this.spinner.hide();
            this.markForm.reset();
            this.router.navigate(['/marked']);
          }
        ).catch(
          err => {
            console.log(err);
            this.spinner.hide();
            window.alert('Error occurred! Please refresh');
          }
        );
      } else {
        this.markService.addMarks(this.markForm.value).then(
          val => {
            console.log('Success');
            this.spinner.hide();
            this.markForm.reset();
            window.alert('Submitted successfully..!');
          }
        ).catch(
          err => {
            console.log(err);
            this.spinner.hide();
            window.alert('Error occurred! Please refresh');
          }
        );
      }
    } else {
      console.log('invalid');
    }
  }

  toggle(a: HTMLElement, i: number) {
    if (this.criterias[i].visible) {
      a.classList.remove('show');
      this.criterias[i].visible = false;
    } else {
      a.classList.add('show');
      this.criterias[i].visible = true;
    }
  }

}
